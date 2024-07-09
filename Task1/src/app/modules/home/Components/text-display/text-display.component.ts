import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit,Output,Renderer2,SimpleChanges } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';

@Component({
  selector: 'text-display',
  templateUrl:'./text-display.component.html',
  styleUrls: ['./text-display.component.css']

  
})

export class TextDisplayComponent implements OnInit, OnChanges {
  

  
  ngOnInit(): void {
      
  }

  displayVal:any
  


  
  // constructor(){}

  oninputChange(event :any){
    this.displayVal=event.target.value;
    this.sharedServices.setInputData(this.displayVal);

  }



  // getValue(val:string){
  //   this.displayVal=val
    
  // }






  // sendData(displayVal:string){

  //   this.sharedServices.changeData(displayVal)

  // }





 name:string=''
 result:string='';


fontSize=15;
stylethis:{[key:string]:string}={'font-size': `${this.fontSize}px`};

constructor(private sharedServices :SharedService,private render:Renderer2, private el:ElementRef){}

display(){
  this.sharedServices.setDataChange(this.name);
}

@Input() item:any='none';

ngOnChanges(changes:SimpleChanges):void{

  console.log("2");
  if(changes['item']){
    console.log("OnChange works");
    console.log(changes['item'].currentValue);
    const btnVal =changes['item'].currentValue;

    switch(btnVal){
      case 'clearbtn':

         this.name='';
         this.result='';
         break;
      case 'whspace':
        this.result=this.name.replace(/\s+/g, '');
        break;

      case 'reverse':
        this.result=this.name.split('').reverse().join('');
        break;
      case 'rmspch':
        this.result=this.name.replace(/[^a-zA-Z0-9]/g,'');
        break;
      // case 'rmstyle':
      //   const element=this.el.nativeElement.querySelector('.remove-style');
      //   break;
      case 'capstext':
        this.result=this.name.toUpperCase();
        break;
      
    }
    
    
  }
  

}






performOperation(id:any){
debugger
    switch(id){
      
        
    }
  }

  





}
