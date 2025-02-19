import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { TokenService } from '../tokenService/token.service';

@Injectable({
  providedIn: 'root'
})
export class VendorAuthGuard implements CanActivate {

  constructor(private authService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoginPage = route.data['isLoginPage'];
    if (isLoginPage && this.authService.isAuthenticatedVendor()) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    } else if (!isLoginPage && !this.authService.isAuthenticatedVendor()) {
      window.location.href = '/login'
      return false;
    }
    return true;
  }



  canActivateLogin(): boolean {
    if (this.authService.isAuthenticatedVendor()) {
      this.router.navigate(['/vendor/dashboard']); // Redirect to dashboard if already logged in
      return false;
    }
    return true;
  }
}
