import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { CategoryComponent } from "./category/category.component";
import { AddCarComponent } from "./add-car/add-car.component";
import { ListingdetailsComponent } from "./listingdetails/listingdetails.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { ShopComponent } from "./shop/shop.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HotDealComponent } from "./hot-deal/hot-deal.component";
import { AdminComponent } from "./admin/admin.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'signup', component: HomeComponent
  },
  {
    path: 'forgot', component: ForgotComponent
  }, 
  {
    path: 'shop', component: CategoryComponent
  },
 
  {
    path: 'detail', component: ListingdetailsComponent
  },
  {
    path: 'search', component: SearchResultComponent
  },
  {
    path: 'brands', component: ShopComponent
  },
  {
    path: 'profile', component: ProfilePageComponent
  },
 
  {
    path: 'watchlist', component: WatchlistComponent
  },
  {
    path: 'Aboutus', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'hotDeal', component: HotDealComponent
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.adminModule) },
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