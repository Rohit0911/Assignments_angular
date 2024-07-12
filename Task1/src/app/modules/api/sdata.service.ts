import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SdataService {

  private primaryUrl='https://jsonplaceholder.typicode.com';
  
  constructor(private http :HttpClient) { 
  }

  getComments(userId:number ):Observable<any>{
    return this.http.get(`${this.primaryUrl}/comments?postId=${userId}`);
  }
  getAlbums(userId:number ):Observable<any>{
    return this.http.get(`${this.primaryUrl}/albums?userId=${userId}`);
  }
  getPhotos(userId:number ):Observable<any>{
    return this.http.get(`${this.primaryUrl}/photos?albumId=${userId}`);
  }
  getToDo(userId:number ):Observable<any>{
    return this.http.get(`${this.primaryUrl}/todos?userId=${userId}`);
  }

  createData(userId: number, body: string): Observable<any> {
    return this.http.post(`${this.primaryUrl}/posts`, {
      userId: userId,
      body: body
    });
  }

  updateData(userId: number, body: string): Observable<any> {
    return this.http.put(`${this.primaryUrl}/posts/${userId}`, {
      id: userId,
      body: body
    });
  }

  deleteData(userId: number): Observable<any> {
    return this.http.delete(`${this.primaryUrl}/posts/${userId}`);
  }





}
