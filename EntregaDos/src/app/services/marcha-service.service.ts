import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarchaServiceService {

  constructor() { }
  getMarchas(){
    return[
      {
        id: 1,
        nombre: 'Juntos contra el COVID-19',
        fecha: '10/05/2020',
        hashtag: '#TodosJuntos',
        descripcion: 'lucha para convatir la  covid y dar consiencia a los jovenes',
        direccion:'retorno 309'
      }
      
    ];
  }
}
