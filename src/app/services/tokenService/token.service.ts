import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  private tokenKey = 'authorization'; // Key for localStorage
  private userType = 'userType'; // Key for localStorage

  // Store token after login
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

   // Store token after login
   setUserType(userType: string) {
    localStorage.setItem(this.userType, userType);
  }

  // Get token
  getUserType(): string | null {
    return localStorage.getItem(this.userType);
  }

 
  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getUserType() ; // Returns true if token exists, false otherwise
  }

  isAuthenticatedAdmin(): boolean {
    return !!this.getToken() && (this.getUserType()=='vendor' || this.getUserType()=='superAdmin'); // Returns true if token exists, false otherwise
  }

  // Logout function
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
