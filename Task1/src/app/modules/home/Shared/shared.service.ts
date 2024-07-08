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
}
