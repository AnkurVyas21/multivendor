import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../enviornment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private baseURL = environment.apiUrl;  // Use environment.apiUrl

  constructor(private http: HttpClient) { }

  // Fetch users
  getUser(): Observable<any> {
    return this.http.get(`${this.baseURL}/users`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  getCars(type:string): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cars`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  getCarsDetailsBasics(id:number): Observable<any> {
    return this.http.get(`${this.baseURL}/cars/${id}/basics`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsSpecification(id:number): Observable<any> {
    return this.http.get(`${this.baseURL}/cars/${id}/specifications`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  getCarsDetailsFeature(id:number): Observable<any> {
    return this.http.get(`${this.baseURL}/cars/${id}/features`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  getCarsDetailsMedia(id:number): Observable<any> {
    return this.http.get(`${this.baseURL}/cars/${id}/media`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsAddress(id:number): Observable<any> {
    return this.http.get(`${this.baseURL}/cars/${id}/address`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsPhoto(id:number): Observable<any> {
    return this.http.get(`${this.baseURL}/cars/media/${id}/photo1`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getSoldCars(): Observable<any> {
    return this.http.get(`${this.baseURL}/soldCars`).pipe(
      catchError((error) => {
        console.error('Error fetching sold cars:', error);
        return throwError(() => error);
      })
    );
  }

  getCustomer(vendorId:string): Observable<any> {
    return this.http.get(`${this.baseURL}/customers/${vendorId}`).pipe(
      catchError((error) => {
        console.error('Error fetching customers:', error);
        return throwError(() => error);
      })
    );
  }

  getOfferPrice(): Observable<any> {
    return this.http.get(`${this.baseURL}/offerPrice`).pipe(
      catchError((error) => {
        console.error('Error fetching offer price:', error);
        return throwError(() => error);
      })
    );
  }

  getTestDrive(): Observable<any> {
    return this.http.get(`${this.baseURL}/testDrive`).pipe(
      catchError((error) => {
        console.error('Error fetching test drive:', error);
        return throwError(() => error);
      })
    );
  }
  
  getVendorList():Observable<any> {
    return this.http.get(`${this.baseURL}/vendorList`).pipe(
      catchError((error) => {
        console.error('Error fetching vendor list:', error);
        return throwError(() => error);
      })
    );
  }

  getTransaction()
  {
    return this.http.get(`${this.baseURL}/transactions`).pipe(
      catchError((error) => {
        console.error('Error fetching transaction:', error);
        return throwError(() => error);
      })
    );
  }


  // Add a user
  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/users`, user);
  }

  addCar(carInfo: any,formType:string): Observable<any> {
    let token = '';
    token = localStorage.getItem("authorization") as string;
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token,
    });
    const options = {
      headers,
    };
    return this.http.post(`${this.baseURL}/cars/${formType}`, carInfo, options);
  }

  updateCar(carInfo: any,formType:string): Observable<any> {
    let token = '';
    token = localStorage.getItem("authorization") as string;
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token,
    });
    const options = {
      headers,
    };
    return this.http.put(`${this.baseURL}/cars/${formType}`, carInfo, options);
  }


  // Update user details
  updateUser(userId: any, user: any): Observable<any> {
    return this.http.put(`${this.baseURL}/users/${userId}`, user);
  }

  // Delete a user
  deleteUser(userId: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/${userId}`);
  }

  // Login method
  login(credentials: { email: string; password: string; userType: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'User-Type': credentials.userType,
      'Authorization': `Basic ${btoa(`${credentials.email}:${credentials.password}`)}`,
    });
  
    return this.http.post(`${this.baseURL}/api/auth/login`, {}, { headers }).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError(() => error);
      })
    );
  }
  

  // Forgot password
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/forgot-password`, { email }).pipe(
      catchError((error) => {
        console.error('Forgot password request failed:', error);
        return throwError(() => error);
      })
    );
  }

  // Get customer details
  getCustomerDetails(customerId: string): Observable<any> {
    return this.http.get(`${this.baseURL}/customers/${customerId}`).pipe(
      catchError((error) => {
        console.error('Error fetching customer details:', error);
        return throwError(() => error);
      })
    );
  }

    // Get customer details
    getVendorDetails(vendorId: string): Observable<any> {
      return this.http.get(`${this.baseURL}/vendors/${vendorId}`).pipe(
        catchError((error) => {
          console.error('Error fetching customer details:', error);
          return throwError(() => error);
        })
      );
    }

  // Accept test drive request
  acceptTestDrive(message: string): Observable<any> {
    return this.http.post(`${this.baseURL}/test-drives/${message}/accept`, {}).pipe(
      catchError((error) => {
        console.error('Error contacting us:', error);
        return throwError(() => error);
      })
    );
  }

  // Reject test drive request
  rejectTestDrive(testDriveId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/test-drives/${testDriveId}/reject`, {}).pipe(
      catchError((error) => {
        console.error('Error rejecting test drive:', error);
        return throwError(() => error);
      })
    );
  }

  // Accept offer price
  acceptOfferPrice(offerId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/offers/${offerId}/accept`, {}).pipe(
      catchError((error) => {
        console.error('Error accepting offer price:', error);
        return throwError(() => error);
      })
    );
  }

  // Reject offer price
  rejectOfferPrice(offerId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/offers/${offerId}/reject`, {}).pipe(
      catchError((error) => {
        console.error('Error rejecting offer price:', error);
        return throwError(() => error);
      })
    );
  }

  contactUS(offerId: string): Observable<any> {
    let token = '';
    token = localStorage.getItem("authorization") as string;
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token,
    });
    const options = {
      headers,
    };
    return this.http.post(`${this.baseURL}/contact/${offerId}`, {}, options).pipe(
      catchError((error) => {
        console.error('Error rejecting offer price:', error);
        return throwError(() => error);
      })
    );
  }

  register(userType: string, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post(`/api/${userType}/register`, userData, { headers }).pipe(
      catchError((error) => {
        console.error('Registration failed:', error);
        return throwError(() => error);
      })
    );
  }
  
}
