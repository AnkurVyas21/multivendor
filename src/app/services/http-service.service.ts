import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../enviornment/environment.prod';

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

  

  getCars(type: string, page?: number, size?: number): Observable<any> {
    let url = type ? `${this.baseURL}/api/cars/${type}` : `${this.baseURL}/api/cars`;

    const params = new HttpParams()
      .set('page', page?.toString()??'1')
      .set('size', size?.toString()??'10');

    return this.http.get(url, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching cars:', error);
        return throwError(() => error);
      })
    );
  }


   getCarsVendors(vendorId: string | null): Observable<any> {
  const url = `${this.baseURL}/api/cars/vendor`;
  let params = new HttpParams();

  if (vendorId) {
    params = params.set('vendorId', vendorId);
  }

  return this.http.get(url, { params }).pipe(
    catchError((error) => {
      console.error('Error fetching cars:', error);
      return throwError(() => error);
    })
  );
}

   getCarsAdmin(status: string | null): Observable<any> {
  const url = `${this.baseURL}/api/admin/cars`;
  let params = new HttpParams();

  if (status) {
    params = params.set('status', status);
  }

  return this.http.get(url, { params }).pipe(
    catchError((error) => {
      console.error('Error fetching cars:', error);
      return throwError(() => error);
    })
  );
}


approveCar(id:any){
 let token = '';
    const params =  new HttpParams().set('carId', id.toString());
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    return (this.http.post(`${this.baseURL}/api/admin/cars/${id}/approve`, { params }));
}

enableVendor(id:any){
 let token = '';
    const params =  new HttpParams().set('vendorId', id.toString());
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    return (this.http.post(`${this.baseURL}/api/admin/vendors/${id}/approve`, { params }));
}

disableVendor(id:any){
 let token = '';
    const params =  new HttpParams().set('vendorId', id.toString());
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    return (this.http.post(`${this.baseURL}/api/admin/vendors/${id}/suspend`, { params }));
}

  getCarsHome(type: string, page?: number, size?: number): Observable<any> {
      const params = new HttpParams()
      .set('page', page?.toString()??'0')
      .set('size', size?.toString()??'10');
    let url = type ? `${this.baseURL}/api/cars/${type}` : `${this.baseURL}/api/cars`;
    return this.http.get(url,{params}).pipe(
      catchError((error) => {
        console.error('Error fetching cars:', error);
        return throwError(() => error);
      })
    );
  }

  getCarsDetailsBasics(id: number): Observable<any> {
     return this.http.get(`${this.baseURL}/api/cars/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

    getCarsSimilar(id: number): Observable<any> {
     return this.http.get(`${this.baseURL}/api/cars/${id}/similar`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsSpecification(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cars/${id}/specifications`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsFeature(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cars/${id}/features`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  getCarsDetailsMedia(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cars/${id}/media`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsAddress(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cars/${id}/address`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }


  getCarsDetailsPhoto(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/api/cars/media/${id}/photo1`).pipe(
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

  getCustomer(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/admin/users`).pipe(
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

  getTestDriveAdmin(status:any): Observable<any> {
      let params = new HttpParams();
  if (status) {
    params = params.set('status', status);
  }

    return this.http.get(`${this.baseURL}/api/admin/test-drives`,{params}).pipe(
      catchError((error) => {
        console.error('Error fetching test drive:', error);
        return throwError(() => error);
      })
    );
  }

  getTestDriveVendor(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/vendor/test-drive/appointments`).pipe(
      catchError((error) => {
        console.error('Error fetching test drive:', error);
        return throwError(() => error);
      })
    );
  }

  approveTestDrive(id: any) {
  const params = new HttpParams()
    .set('appointmentId', id.toString())
    .set('status', 'CONFIRMED');

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  return this.http.patch(
    `${this.baseURL}/api/vendor/test-drive/appointments/status`,
    {},
    { headers, params }
  );
}


  declineTestDrive(id: any) {
  const params = new HttpParams()
    .set('appointmentId', id.toString())
    .set('status', 'CANCELED');

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  return this.http.patch(
    `${this.baseURL}/api/vendor/test-drive/appointments/status`,
    {}, 
    { headers, params }
  );
}



  getadminVendorList(): Observable<any> {
    return this.http.get(`${this.baseURL}/api/admin/vendors`).pipe(
      catchError((error) => {
        console.error('Error fetching vendor list:', error);
        return throwError(() => error);
      })
    );
  }


  getTransaction() {
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


   sendTestDrive(formData: any): Observable<any> {
    return this.http.post(`${this.baseURL}/api/user/test-drive/appointments`, formData);
  }

  sendMakeOffer(formData: any): Observable<any> {
    return this.http.post(`${this.baseURL}/api/users/offer/request`, formData);
  }

  addCar(carInfo: any, formType: string, id: number): Observable<any> {
    console.log(formType,id,'424241')
    let token = '';
    const params = formType == 'add-basic' ? new HttpParams().set('vendorID', id.toString()) : new HttpParams().set('carId', id.toString());
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    return (formType == 'add-basic' ? this.http.post(`${this.baseURL}/api/cars/${formType}`, carInfo, { params }) : this.http.post(`${this.baseURL}/api/cars/${id}/${formType}`, carInfo, { params }));
  }

  updateCar(carInfo: any, formType: string): Observable<any> {
    let token = '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    return this.http.put(`${this.baseURL}/api/cars/${formType}`, carInfo, options);
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
    console.log(credentials)
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
  forgotPassword(payload: { emailOrPhone: string }): Observable<any> {
    return this.http.post(`${this.baseURL}/api/auth/forgot-password`, payload).pipe(
      catchError((error) => {
        console.error('Forgot password request failed:', error);
        return throwError(() => error);
      })
    );
  }

  wishlistPost(id:any,email:any): Observable<any> {
    return this.http.post(`${this.baseURL}/api/wishlist/add/`+id, {carId:id }).pipe(
      catchError((error) => {
        console.error('Forgot password request failed:', error);
        return throwError(() => error);
      })
    );
  }

deleteWishlist(id: any) {
  return this.http.delete(`${this.baseURL}/api/wishlist/remove/${id}`, {
    body: { carId: id }
  }).pipe(
    catchError((error) => {
      console.error('Delete wishlist request failed:', error);
      return throwError(() => error);
    })
  );
}

  getWishlist(email: string|null): Observable<any> {
    if(localStorage.getItem('userType')!='user')
    {
      return new Observable(Observer=>{
       Observer.next([]),Observer.complete()  ,Observer.error([])
      })
    }
    return this.http.get(`${this.baseURL}/api/wishlist/wishlist`).pipe(
      catchError((error) => {
        console.error('Error fetching customer details:', error);
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


    getVendorDetailsforAdmin(vendorId: string): Observable<any> {
    let url = `${this.baseURL}/api/admin/vendors/${vendorId}`

    let params = new HttpParams();

  if (vendorId) {
    params = params.set('vendorId', vendorId);
  }

  return this.http.get(url, { params }).pipe(
    catchError((error) => {
      console.error('Error fetching cars:', error);
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

  contactUS(payload: any): Observable<any> {
    let token = '';
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
   
    return this.http.post(`${this.baseURL}/api/public/contact/add`, payload).pipe(
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
    if (userType == 'superAdmin') {
      return this.http.post(`${this.baseURL}/api/public/create-admin`, userData, { headers }).pipe(
        catchError((error) => {
          console.error('Registration failed:', error);
          return throwError(() => error);
        })
      );
    }

    if (userType == 'vendor') {
      userType = 'vendors'
       return this.http.post(`${this.baseURL}/api/public/${userType}/register`, userData, { headers }).pipe(
      catchError((error) => {
        console.error('Registration failed:', error);
        return throwError(() => error);
      })
    );
    }
      else {
      userType = 'public'
       return this.http.post(`${this.baseURL}/api/${userType}/register`, userData, { headers }).pipe(
      catchError((error) => {
        console.error('Registration failed:', error);
        return throwError(() => error);
      })
    );
    }


   
  }

  getSelfProfile() {
    return this.http.get(`${this.baseURL}/api/user/profile`).pipe(
      catchError((error) => {
        console.error('Error fetching user profile:', error);
        return throwError(() => error);
      })
    );
  }
  searchCarHome(keyword:string)
  {
       let url = `${this.baseURL}/api/cars/search`;
    const params = new HttpParams().set('keyword', keyword?.toString()) 
     return this.http.get(url,{params}).pipe(
      catchError((error) => {
        console.error('Error fetching user profile:', error);
        return throwError(() => error);
      })
    );
  }

  searchCarType(type:string)
  {
       let url = `${this.baseURL}/api/cars/type`;
    // const params = new HttpParams().set('type', keyword?.toString()) 
     return this.http.get(url+'/'+type).pipe(
      catchError((error) => {
        console.error('Error fetching user profile:', error);
        return throwError(() => error);
      })
    );
  }

  searchCarMake(make:string)
  {
       let url = `${this.baseURL}/api/cars/make`;
    // const params = new HttpParams().set('type', keyword?.toString()) 
     return this.http.get(url+'/'+make).pipe(
      catchError((error) => {
        console.error('Error fetching user profile:', error);
        return throwError(() => error);
      })
    );
  }

filterCars(value: any) {
  const url = `${this.baseURL}/api/cars/filter-advanced`;

  // Step 1: Replace condition boolean with 'used' or 'unused'
  const queryParams = { ...value };
  // Step 2: Remove empty, null, or undefined fields
  const filteredBody = Object.fromEntries(
    Object.entries(queryParams).filter(([_, v]) => v !== '' && v != null)
  );

  // Step 3: Make POST request with body (not as query params)
  return this.http.post(url, filteredBody).pipe(
    catchError((error) => {
      console.error('Error fetching cars:', error);
      return throwError(() => error);
    })
  );
}


  getAllCars()
  { 
       let url = `${this.baseURL}/api/cars/all`;
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Error fetching user profile:', error);
        return throwError(() => error);
      })
    );
  }

}
