import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { CategoryComponent } from "./category/category.component";
import { ListingdetailsComponent } from "./listingdetails/listingdetails.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { ShopComponent } from "./shop/shop.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HotDealComponent } from "./hot-deal/hot-deal.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { AuthGuard } from "./services/authGuard/auth.guard";
import { AdminAuthGuard } from "./services/authGuard/adminAuth.guard";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'login', component: LoginComponent , canActivate: [AuthGuard], data: { isLoginPage: true }
  },
  {
    path: 'login/admin', component: LoginComponent , canActivate: [AuthGuard], data: { isLoginPage: true }
  },
  {
    path: 'register', component: RegisterComponent , canActivate: [AuthGuard], data: { isLoginPage: true }
  },
  {
    path: 'signup', component: HomeComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'forgot', component: ForgotComponent , canActivate: [AuthGuard], data: { isLoginPage: true }
  }, 
  {
    path: 'shop', component: CategoryComponent , canActivate: [AuthGuard] 
  },
 
  {
    path: 'detail', component: ListingdetailsComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'search', component: SearchResultComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'brands', component: ShopComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'profile', component: ProfilePageComponent , canActivate: [AuthGuard] 
  },
 
  {
    path: 'watchlist', component: WatchlistComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'Aboutus', component: AboutComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'contact', component: ContactComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'hotDeal', component: HotDealComponent , canActivate: [AuthGuard] 
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.adminModule), canActivate:[AdminAuthGuard]},
  { path: 'vendor', loadChildren: () => import('./admin/admin.module').then(m => m.adminModule), canActivate:[AdminAuthGuard]},
  {
    path: '**', component: HomeComponent , canActivate: [AuthGuard] 
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class appRoutingModule { }