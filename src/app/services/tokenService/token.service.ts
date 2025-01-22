import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  private tokenKey = 'authorization'; // Key for localStorage

  // Store token after login
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken(); // Returns true if token exists, false otherwise
  }

  // Logout function
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
