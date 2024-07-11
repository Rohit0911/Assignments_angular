import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})


export class UserdataComponent implements OnInit {

  constructor(private cookie:CookieService) { }




  reactiveForm:FormGroup;
  savedFormDataArray: any[] = [];





  ngOnInit(){
    const reg='(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    const nm = '^[a-zA-Z ]*$';
    const pm = '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|[1-5]?[0-9]{1,4})$';


    this.reactiveForm=new FormGroup({

      dbname: new FormControl(null, [Validators.required, Validators.pattern(nm)]),
      portNumber: new FormControl(null, [Validators.required, Validators.pattern(pm), Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      url: new FormControl(null, [Validators.required, Validators.pattern(reg)]),
   

    });

    this.loadFormData();


  }


  onSubmit(){
    this.saveFormData();
  }

  saveFormData(){
    const newformData=this.reactiveForm.value;
    this.savedFormDataArray.push(newformData);
    this.cookie.set('formDataarray',JSON.stringify(this.savedFormDataArray));
  }

  loadFormData(){
    const formarrayString=this.cookie.get('formDataarray');
    if(formarrayString){
      this.savedFormDataArray=JSON.parse(formarrayString);
    }
  }

  clearForm(){
    this.reactiveForm.reset({
      dbname:null,
      portNumber:null,
      password:null,
      url:null,


    });
  }

  

}
