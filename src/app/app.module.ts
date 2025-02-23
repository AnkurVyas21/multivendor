import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { adminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing.module';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsBannerComponent } from './home/contact-us-banner/contact-us-banner.component';
import { ExploreAllCarsComponent } from './home/explore-all-cars/explore-all-cars.component';
import { ExploreOurCarsComponent } from './home/explore-our-cars/explore-our-cars.component';
import { HomeComponent } from './home/home.component';
import { RecentlyAddedCarsComponent } from './home/recently-added-cars/recently-added-cars.component';
import { SearchAndBannerComponent } from './home/search-and-banner/search-and-banner.component';
import { SellOrBuycarsCardsComponent } from './home/sell-or-buycars-cards/sell-or-buycars-cards.component';
import { ShopByBrandComponent } from './home/shop-by-brand/shop-by-brand.component';
import { TrendingCarsComponent } from './home/trending-cars/trending-cars.component';
import { WebsiteFeaturesCardsComponent } from './home/website-features-cards/website-features-cards.component';
import { HotDealComponent } from './hot-deal/hot-deal.component';
import { ListingdetailsComponent } from './listingdetails/listingdetails.component';
import { LoginComponent } from './login/login.component';
import { NewsVideosComponent } from './news-videos/news-videos.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShopComponent } from './shop/shop.component';
import { VendorModule } from './vendor/vendor.module';
import { VendorComponent } from './vendor/vendor/vendor.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SharedModule } from './shared/shared.module';
import { MatTableModule } from '@angular/material/table';


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
    ListingdetailsComponent,
    SearchResultComponent,
    ShopComponent,
    WatchlistComponent,
    DialogBoxComponent,
    AboutComponent,
    ContactComponent,
    HotDealComponent,
    AdminComponent,
    VendorComponent,
    TrendingCarsComponent,
    RecentlyAddedCarsComponent,
    ExploreAllCarsComponent,
    ExploreOurCarsComponent,
    SearchAndBannerComponent,
    ShopByBrandComponent,
    WebsiteFeaturesCardsComponent,
    SellOrBuycarsCardsComponent,
    ContactUsBannerComponent,
    NewsVideosComponent

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    adminModule,
    VendorModule,
    MatMenuModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule,
     
    
  ],
 
 
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
