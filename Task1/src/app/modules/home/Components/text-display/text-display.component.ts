import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit,Output,Renderer2,SimpleChanges } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { log } from 'console';

@Component({
  selector: 'text-display',
  templateUrl:'./text-display.component.html',
  styleUrls: ['./text-display.component.css']

  
})

export class TextDisplayComponent implements OnInit, OnChanges {
  

  
name:string=''
result:string='';

  
  ngOnInit(): void {
      
  }

  displayVal:any
    getValue(val:string){
      this.displayVal=val
    }

  // constructor(){}

  // oninputChange(event :any){
  //   this.displayVal=event.target.value;
  //   this.sharedServices.setInputData(this.displayVal);

  // }




  todisplay(){
    this.sharedServices.setDataChange(this.name);

  }


  // @Output() sendtoParent=new EventEmitter<any>();


  // sendData(event:any){
  //   this.sendtoParent.emit(this.displayVal);
  // }


  @Input() getCharId :any;



  // sendData(displayVal:string){

  //   this.sharedServices.changeData(displayVal)

  // }




fontSize=10;
stylethis:{[key:string]:string}={'font-size': `${this.fontSize}px`};

constructor(private sharedServices :SharedService,private render:Renderer2, private el:ElementRef){}

display(){
  this.sharedServices.setDataChange(this.name);
}



ngOnChanges(changes:SimpleChanges):void{

  // console.log("2");

  if(changes['getCharId']){
    console.log("OnChange works");
    console.log(changes['getCharId'].currentValue);
    const btnVal =changes['getCharId'].currentValue;

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

      case 'rmstyle':
        const element=this.el.nativeElement.querySelector('.remove-style');
        this.render.removeAttribute(element,'style');
        break;
        
      case 'capstext':
        this.result=this.name.toUpperCase();
        break;

      case 'fontsize':
        this.stylethis
        break;
      case 'bold':
        this.stylethis['font-weight']='bold';
        break;
      case 'italybtn':
        this.stylethis['font-style']='italic'
        break;
      case 'underline':
        this.stylethis['text-decoration']='underline'
        break;
      case 'incfont':
        this.fontSize+=10;
        this.stylethis['font-size']=`${this.fontSize}px`
        break;
      case 'dcfont':
        this.fontSize-=10;
        this.stylethis['font-size']=`${this.fontSize}px`
        break;
      default:
        this.stylethis['color']=`${this.getCharId}`
        break;

      
    }
    
    
  }
  

}





}