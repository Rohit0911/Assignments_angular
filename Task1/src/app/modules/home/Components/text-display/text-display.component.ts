import { Component, EventEmitter, Input, OnInit,Output,SimpleChanges } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';

@Component({
  selector: 'app-text-display',
  templateUrl:'./text-display.component.html',
  styleUrls: ['./text-display.component.css']

  
})

export class TextDisplayComponent implements OnInit {
  

  
  ngOnInit(): void {
      
  }

  displayVal:any
  


  constructor(private sharedServices :SharedService){}
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


  @Input()
  set textOperations(operations:{type:string}){
    if(operations){
      this.performOperation(operations.type);
    }
  }



  // set operations(value:void){
  //   if(value){
  //     this.modifyText();
  //   }
  // }

  // modifyText(){
  //   this.displayVal=this.displayVal.toUpperCase();
  // }

text1:string=''
text2:string=''

performOperation(id:any){

    switch(id){
      case 'clearbtn':

         this.text1='';
         this.text2='';
         break;
      case 'whspace':
        this.text2=this.text1.replace(/\s+/g, '');
        break;

      case 'reverse':
        this.text2=this.text1.split('').reverse().join('');
        break;
      case 'rmspch':
        this.text2=this.text1.replace(/[^a-zA-Z0-9]/g,'');
        break;
      // case 'rmstyle':
      //   const element=this.el.nativeElement.querySelector('.remove-style');
      //   break;
      case 'capstext':
        this.text2=this.text1.toUpperCase();
        break;
        
    }
  }

  





}
