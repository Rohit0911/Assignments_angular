import { Component, Input, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
 
  
})

export class HomeComponent implements OnInit {
todisplay() {
throw new Error('Method not implemented.');
}
stylethis: { [klass: string]: any; }|null|undefined;
result: any;
name: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  childData:any='';

  receiveMessage($event:any){
    this.childData=$event;
    // console.log(this.childData);


  }
  childVal='';


  sendToDisplay():any{
    this.childVal=this.childData;
    return this.childVal;
  }








 
  




  // currentOperation:any='';

  // onButtonClick(item:any){
  //   this.currentOperation=item;
  // }



  


}
