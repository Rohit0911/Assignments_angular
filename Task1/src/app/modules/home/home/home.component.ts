import { Component, Input, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
 
  
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  childData:any='';

  receiveMessage($event:any){
    this.childData=$event;
    // console.log(this.childData);


  }

 
  




  // currentOperation:any='';

  // onButtonClick(item:any){
  //   this.currentOperation=item;
  // }



  


}
