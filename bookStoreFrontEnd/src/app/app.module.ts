import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './component/sign-up/sign-up.component';

import { MatrialModule} from '../matrial/matrial.module';
import { ResetComponent } from './component/reset/reset.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { DisplayBooksComponent } from './component/display-books/display-books.component';
import { HomeComponent } from './component/home/home.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { ProfileComponent } from './component/profile/profile.component';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';
import { CartComponent } from './component/cart/cart.component'
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { PipePipe } from './pipe.pipe';
import { OrderStatusComponent } from './component/order-status/order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ResetComponent,
    ForgotComponent,
    DisplayBooksComponent,
    HomeComponent,
    QuickViewComponent,
    ProfileComponent,
    OrderPlacedComponent,
    CartComponent,
    WishlistComponent,
    PipePipe,
    OrderStatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxPaginationModule,
    CommonModule,
    MatrialModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
