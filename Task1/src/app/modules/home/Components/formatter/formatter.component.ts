import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})


export class FormatterComponent implements OnInit {
  receieveddata:string='';
  wordCount:number=0;
  charCOunt:number=0;

  constructor(private sharedService:SharedService) { }
  message=''



  ngOnInit():void {

   this.sharedService.newdata.subscribe(data=>{
    this.receieveddata=data;
    this.compute();


   });
    
  };

  compute(){
    this.wordCount=this.receieveddata ? this.receieveddata.split(/\s+/).filter(Boolean).length :0;
    this.charCOunt=this.receieveddata.length;
  }

  

  // countWords(x:string):number{
  //   return x? x.trim().split(/\s+/).length:0;
  // }


  // countChars(y:string):number{
  //   return y? y.length :0;
  // }



  

  



  // console.log(message);
  

  // message: string='';

  btn:any;
  @Output() buttonClick=new EventEmitter<any>();

  getId(event:any){
    if(event.targetId){
      this.btn=event.target.id;
      this.buttonClick.emit(this.btn);
    }
  }

  


}
