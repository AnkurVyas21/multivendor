import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CategoryComponent } from './category/category.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ListingdetailsComponent } from './listingdetails/listingdetails.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShopComponent } from './shop/shop.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    CategoryComponent,
    AddCarComponent,
    ListingdetailsComponent,
    SearchResultComponent,
    ShopComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
