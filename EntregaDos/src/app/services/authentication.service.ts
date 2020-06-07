import { Inject, Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import {
  from,
  of,
  Observable,
  BehaviorSubject,
  combineLatest,
  throwError,
} from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user_for_db = {};
  user_type = '';

  //fakeData
  usuarios: Usuario[] = [];
  //usefullData
  public sessionLogin: boolean = false;
  sessionType: string;
  sessionData: any = this.storage.get('SESSION') || '';

  // AUTH0 Config
  endpoint = 'http://localhost:8081/auth';

  auth0Client$ = (from(
    createAuth0Client({
      domain: 'dev-hmnnmmhr.auth0.com',
      client_id: 'RH3SHUX3bAAMBza85ZqTpCA4YO6lbolb',
      redirect_uri: `${window.location.origin}`,
      audience: 'http://localhost:8081',
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Every subscription receives the same shared value
    catchError((err) => throwError(err))
  );
  // Define observables for SDK methods that return promises by default
  // For each Auth0 SDK method, first ensure the client instance is ready
  // concatMap: Using the client instance, call SDK method; SDK returns a promise
  // from: Convert that resulting promise into an observable
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap((res) => (this.loggedIn = res))
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Create subject and public observable of user profile data
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;

  getTokenSilently$(options?): Observable<string> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getTokenSilently(options)))
    );
  }

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private router: Router,
    private http: HttpClient
  ) {
    // On initial load, check authentication state with authorization server
    // Set up local auth streams if user is already authenticated
    this.localAuthSetup();
    // Handle redirect from Auth0 login
    this.handleAuthCallback();
  }

  // When calling, options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap((user) => this.userProfileSubject$.next(user))
    );
  }

  private localAuthSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          // If authenticated, get user and set in app
          // NOTE: you could pass options here if needed
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = '/usuario/inicio') {
    // A desired redirect path can be passed to login method
    // (e.g., from a route guard)
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log in
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath },
      });
    });
  }

  private handleAuthCallback() {
    // Call when app reloads after user logs in with Auth0
    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string; // Path to redirect to after login processsed
      const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap((cbRes) => {
          // Get and set target redirect route from callback results
          targetRoute =
            cbRes.appState && cbRes.appState.target
              ? cbRes.appState.target
              : '/';
        }),
        concatMap(() => {
          // Redirect callback complete; get user and login status
          return combineLatest([this.getUser$(), this.isAuthenticated$]);
        })
      );
      // Subscribe to authentication completion observable
      // Response will be an array of user and login status
      authComplete$.subscribe(([user, loggedIn]) => {
        // Redirect to target route after callback processing
        console.log('USER------>');
        this.user_type = 'user';
        if (user.sub == 'google-oauth2|113536811334279305343') {
          this.user_type = 'admin';
          targetRoute = '/admin/inicio';
        }
        this.user_for_db = {
          name: user.given_name,
          last_name: user.family_name,
          email: user.email,
          type: this.user_type,
          sub: user.sub,
        };
        console.log(this.user_for_db);

        //mandar a DB
        this.http
          .post(this.endpoint + '/usuario/inicio', this.user_for_db)
          .subscribe(
            (response) => console.log('llego'),
            (error) => console.log(error)
          );
        this.router.navigate([targetRoute]);
      });
    }
  }

  logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: 'RH3SHUX3bAAMBza85ZqTpCA4YO6lbolb',
        returnTo: `${window.location.origin}`,
      });
    });
  }

  public get currentUserValue() {
    return this.storage.get('SESSION') || '';
  }

  getCurrent() {
    let t = this.storage.get('SESSION') || '';
    return t;
  }

  loginAction(user_email: string, password: string): void {
    let user = this.usuarios.find((element) => element.correo === user_email);
    if (typeof user !== 'undefined') {
      this.sessionLogin = true;
      this.sessionType = user.tipo;

      this.storage.set('SESSION', {
        user: user_email,
        pass: password,
        type: user.tipo,
      });
      this.sessionData = this.storage.get('SESSION');

      this.loginSession();
    } else {
      console.log('not found');
    }
  }
  //reload hasta hacer async
  loginSession(): void {
    if (this.sessionType === 'admin') {
      this.router.navigate(['/admin/inicio']);
    } else {
      this.router.navigate(['/usuario/inicio']);
    }
  }

  logoutAction(): void {
    this.storage.clear();
    this.sessionData = '';
    this.sessionType = '';
    // this.router.navigate(['/login']);
  }
}
