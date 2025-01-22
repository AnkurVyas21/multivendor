import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // API Endpoint

  constructor(private http: HttpClient) { }

  login(email: string, password: string, userType:string): Observable<any> {
    const credentials = btoa(`${email}:${password}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'User-Type': userType,
      'Authorization': `Basic ${credentials}`
    });
  
    return this.http.post(this.apiUrl, {}, { headers });
  }
}  
