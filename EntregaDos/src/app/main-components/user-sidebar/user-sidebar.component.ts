import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare const fullHeight: any;

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({ 

        
        
        
  //     })),
  //     state('closed', style({
       
  //     })),
  //     transition('open => closed', [
  //       animate('5s ease-in')
  //     ]),
  //     transition('closed => open', [
  //       animate('5s ease-in-out')
  //     ]),
  //   ]),
  // ],
  
  
})
export class UserSidebarComponent implements OnInit {
  esta="tuna";
  isOpen=true;
  mostrado:boolean;
  constructor() {}

  ngOnInit(): void {
    fullHeight();
  }
  // toggle(){
   
  //   // console.log(this.esta);
  //   this.isOpen=!this.isOpen;
  // }
  

 

}
