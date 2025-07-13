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
import { NewsVideosComponent } from "./news-videos/news-videos.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SearchCarListComponent } from "./search-car-list/search-car-list.component";
import { BrandViewMoreComponent } from "./brand-view-more/brand-view-more.component";
import { CategoriesViewMoreComponent } from "./categories-view-more/categories-view-more.component";

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
    path: 'register/:userType', component: RegisterComponent , canActivate: [AuthGuard], data: { isLoginPage: true }
  },
  {
    path: 'signup', component: HomeComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'forgot', component: ForgotComponent , canActivate: [AuthGuard], data: { isLoginPage: true }
  }, 
  {
    path: 'shop', component: CategoryComponent  
  },
 
  {
    path: 'detail/:id', component: ListingdetailsComponent 
  },
  // {
  //   path: 'search', component: SearchResultComponent , canActivate: [AuthGuard] 
  // },
  // {
  //   path: 'brands', component: ShopComponent  
  // },
  {
    path: 'profile', component: ProfilePageComponent , canActivate: [AuthGuard] 
  },
 
  {
    path: 'wishlist', component: WatchlistComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'Aboutus', component: AboutComponent  
  },
  {
    path: 'contact', component: ContactComponent  
  },
  {
    path: 'news', component: NewsVideosComponent  
  },
  {
    path: 'hotDeal', component: HotDealComponent  
  },
  {
    path: 'search', component: SearchCarListComponent  
  },
   {
    path: 'trending', component: SearchCarListComponent  
  },
   {
    path: 'recently', component: SearchCarListComponent  
  },
   {
    path: 'explore-all', component: SearchCarListComponent  
  },
  {
    path: 'brands', component: BrandViewMoreComponent  
  },
  {
    path: 'categories', component: CategoriesViewMoreComponent  
  },
  {
    path: 'reset-password', component: ResetPasswordComponent , canActivate: [AuthGuard] 
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.adminModule), canActivate:[AdminAuthGuard]},
  { path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)},
  {
    path: '**', component: HomeComponent  
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