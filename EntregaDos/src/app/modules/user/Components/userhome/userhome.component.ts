import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { ApiService } from '../../../../services/api.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Marcha } from 'src/app/models/Marcha';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  animations: [
    trigger('marchaAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          filter: 'drop-shadow(10px 10px 10px gray)',
        }),
        animate(
          '5s ease-out',
          style({
            opacity: 3,
            filter: 'drop-shadow(0px 0px 0px gray)',
          })
        ),
      ]),
    ]),
  ],
})
export class UserhomeComponent implements OnInit {
  strikes: Marcha[];
  private marchaSub: Subscription;
  private total: Subscription;

  //pagination
  totalPost;
  currentPage = 1;
  strikePerPage = 4;
  paseSizeOption = [4, 8, 10];
  constructor(private _marchaServices: MarchaServiceService) {}

  ngOnInit() {
    this._marchaServices.getMarchas(this.strikePerPage, this.currentPage);
    this.marchaSub = this._marchaServices
      .getMarchasUpdatedListener()
      .subscribe((strikes: Marcha[]) => (this.strikes = strikes));
    this.total = this._marchaServices
      .getTotalPosts()
      .subscribe((total: number) => (this.totalPost=total));
      // console.log("total de marchas: "+this.totalPost);
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.strikePerPage = pageData.pageSize;
    this._marchaServices.getMarchas(this.strikePerPage, this.currentPage);
  }
}
