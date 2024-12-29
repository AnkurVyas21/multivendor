import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 private baseURL = '';

  constructor(private http:HttpClient) { }


  getUser(): Observable<any> {
    return this.http.get(`${this.baseURL}`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  
 addUser(user:any)
 {
  return this.http.post(`${this.baseURL}`,user)
 }

 updateUser(userId:any, user:any)
 {
  return  this.http.put(`${this.baseURL}/${userId}`,user)
 }

 deleteUser(userId:any)
 {
  return this.http.delete(`${this.baseURL}/${userId}`)
 }
}
