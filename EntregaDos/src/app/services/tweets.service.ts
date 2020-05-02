import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  constructor() {}

  getTweets() {
    //fake data
    return [
      {
        name: 'Andrea',
        handle: '@andrea',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
      {
        name: 'Lia',
        handle: '@andrea',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
      {
        name: 'Alex',
        handle: '@andrea',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
      {
        name: 'José',
        handle: '@andrea',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
    ];
  }
}
