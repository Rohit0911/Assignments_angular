import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit,Output,Renderer2,SimpleChanges } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'text-display',
  templateUrl:'./text-display.component.html',
  styleUrls: ['./text-display.component.css']

  
})

export class TextDisplayComponent implements OnInit, OnChanges {
  


  
  name:string=''
  result:string='';
  boldActive: boolean=false;
  italicActive: boolean=false;
  underlineActive: boolean=false;

  
  ngOnInit(): void {
      
  }

  displayVal:any
    getValue(val:string){
      this.displayVal=val
    }

 



  todisplay(){
    
    this.sharedServices.setDataChange(this.name);

  }



  @Input() getCharId :any;




fontSize=18;
stylethis:{[key:string]:string}={'font-size': `${this.fontSize}px`};

constructor(private sharedServices :SharedService,private render:Renderer2, private el:ElementRef){}

display(){
  this.result=this.name;
  this.sharedServices.setDataChange(this.name);
  }
  
  
  isBold:boolean=false;
  isItaly:boolean=false;
  isUnderline:boolean=false;

  fontColor:string='red';
  
  stylecolor:{[key:string]:string}={'color': `${this.fontColor}`};

ngOnChanges(changes:SimpleChanges):void{

  

  if (changes['getCharId']) {
      console.log(changes['getCharId'].currentValue);
      const btnVal = changes['getCharId'].currentValue;

      switch (btnVal) {
        case 'clearbtn':
          this.name = '';
          this.display();
          break;
         
        case 'whspace':
          this.result = this.name.replace(/\s+/g, '');
          // this.name=this.name;
          console.log(this.name);
          break;
          

        case 'reverse':
          this.result = this.name.split('').reverse().join('');
          // this.name=this.name;
          console.log(this.name);
          break;

        case 'rmspch':
          this.result = this.name.replace(/[^a-zA-Z0-9]/g, '');
          
          console.log(this.name);
          break;

        case 'rmstyle':
          const element = this.el.nativeElement.querySelector('.remove-style');
          this.render.removeAttribute(element, 'style');
          
          break;

        case 'capstext':
          this.result = this.name.toUpperCase();
          
          break;
        case 'bold':
          // if(!this.isBold){
          //   this.stylethis['font-weight']='bold';
          //   this.isBold=true;
          // }else{
              
          //     this.stylethis['font-weight']='normal';
          //     this.isBold=false;
          // }
          this.isBold=!this.isBold;
          this.stylethis['font-weight'] = this.isBold ? 'bold' : 'normal';
          this.boldActive = this.isBold;
          break;

        case 'italybtn':
        
          this.isItaly = !this.isItaly;
          this.stylethis['font-style'] = this.isItaly ? 'italic' : 'normal';
          this.italicActive = this.isItaly;
          break;

        case 'underline':
         

          this.isUnderline = !this.isUnderline;
          this.stylethis['text-decoration'] = this.isUnderline ? 'underline' : 'none';
          this.underlineActive = this.isUnderline;
          break;

        case 'incfont':
          this.fontSize += 10;
          this.stylethis['font-size'] = `${this.fontSize}px`;
          break;

        case 'dcfont':
          this.fontSize -= 10;
          this.stylethis['font-size'] = `${this.fontSize}px`;
          break;
        case 'color':
          

            this.stylethis['color']=this.fontColor;
       
          // this.stylethis['color'] = `${btnVal}`;
          break;
        default:
          break;

      
    }

    
  }
  // this.result=this.name
  

}






}

