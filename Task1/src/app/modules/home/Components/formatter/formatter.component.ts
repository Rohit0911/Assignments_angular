import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { log } from 'console';

@Component({
  selector: 'text-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})


export class FormatterComponent implements OnInit {
  receieveddata:string='';
  idButton:any='';
  idColor:any='';
  wordCount:number=0;
  charCOunt:number=0;

  constructor(private sharedService:SharedService) { }
  message=''



  ngOnInit():void {

   this.sharedService.dataChange.subscribe(data=>{
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



  @Output() updateSignal=new EventEmitter<any>();

  getId(event:any){
    // console.log("1");
    // if(event.target=='favcolor'){
    //   this.idColor=event.target.value;
    //   this.updateSignal.emit(this.idColor);
    // }else{
      this.idButton=event.target.id;
      this.updateSignal.emit(this.idButton);
    // }

    
  }

  


}
