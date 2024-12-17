import { Route, RouterModule, Routes } from "@angular/router";
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
    path: 'category', component: CategoryComponent
  },
  {
    path: 'addCar', component: AddCarComponent
  },
  {
    path: 'detail', component: ListingdetailsComponent
  },
  {
    path: 'search', component: SearchResultComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'watchlist', component: WatchlistComponent
  },
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