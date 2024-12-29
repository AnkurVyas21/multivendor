import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ReactiveFormsModule } from '@angular/forms';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HotDealComponent } from './hot-deal/hot-deal.component';



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
    WatchlistComponent,
    DialogBoxComponent,
    AboutComponent,
    ContactComponent,
    HotDealComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
