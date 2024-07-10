import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})


export class SharedService {

  private message=new BehaviorSubject<string>(' ');


  newdata=this.message.asObservable();



  

  constructor() { }


  setInputData(data:string){
    // console.log(rdata);
    this.message.next(data);

    
  }

  private inpdata:string='';
  
  dataChange:EventEmitter<string>=new EventEmitter<string>();

  
  setDataChange(data:string){
    this.inpdata=data;
    this.dataChange.emit(this.inpdata);
    
  }
}