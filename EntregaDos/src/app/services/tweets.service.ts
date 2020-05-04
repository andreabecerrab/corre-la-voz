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
        handle: '@lia',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
      {
        name: 'Alex',
        handle: '@alex',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 5,
        likes: 2,
      },
      {
        name: 'José',
        handle: '@josesin',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 202,
        likes: 2,
      },
      {
        name: 'Andrea',
        handle: '@andrea',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 80,
        likes: 2,
      },
      {
        name: 'Lia',
        handle: '@lia',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
      {
        name: 'Alex',
        handle: '@alex',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 50,
        likes: 2,
      },
      {
        name: 'José',
        handle: '@josesin',
        content: 'Contenido del tweet',
        date: '13/03/2020',
        rt: 20,
        likes: 2,
      },
    ];
  }
}
