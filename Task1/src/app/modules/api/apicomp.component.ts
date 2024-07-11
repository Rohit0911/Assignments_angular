import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SdataService } from './sdata.service';
import { error } from 'console';

@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.css']
})
export class ApicompComponent implements OnInit {
  userId:number;
  responseData:string;
  errormsg:string;

  private primaryUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private dataservice :SdataService) { 
  }


  
  ngOnInit(): void {
  }

  // getUsers():Observable<User[]>{
  //   return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  // }

  // getUser():Observable<User>{
  //   return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/1`)
  // }


  fetchComments() {
    this.dataservice.getComments(this.userId).subscribe(
      data => this.responseData = JSON.stringify(data, null, 2),
      error => this.errormsg = error.message
    );
  }


  fetchAlbums(){
    this.dataservice.getAlbums(this.userId).subscribe(data=>this.responseData=JSON.stringify(data,null,2),
    error=>this.errormsg=error.message
      
  );
   
  }

  fetchPhotos(){
    this.dataservice.getPhotos(this.userId).subscribe(data=>this.responseData=JSON.stringify(data,null,2),
    error=>this.errormsg=error.message
  );
  }


  fetchToDo(){
    this.dataservice.getToDo(this.userId).subscribe(data=>this.responseData=JSON.stringify(data,null,2),
    error=>this.errormsg=error.message
  )
  }






  

}
