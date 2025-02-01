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
import { AddCarComponent } from './admin/add-car/add-car.component';
import { ListingdetailsComponent } from './listingdetails/listingdetails.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShopComponent } from './shop/shop.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HotDealComponent } from './hot-deal/hot-deal.component';
import { AdminComponent } from './admin/admin.component';
import { adminModule } from './admin/admin.module';
import {MatMenuModule} from '@angular/material/menu';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs'
import { MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'


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
    AdminComponent,
    ProfilePageComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    adminModule,
    MatMenuModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
