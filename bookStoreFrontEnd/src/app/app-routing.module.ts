import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DisplayBooksComponent } from './component/display-books/display-books.component';

import { ForgotComponent } from './component/forgot/forgot.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';
import { OrderStatusComponent } from './component/order-status/order-status.component';
import { ProfileComponent } from './component/profile/profile.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';

import { ResetComponent } from './component/reset/reset.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', component:SignUpComponent},

  {path:'quickview', component:QuickViewComponent},
  {path:'resetpassword/:token', component:ResetComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'header', component:HeaderComponent},
  
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'allbooks', component: DisplayBooksComponent },
      { path: 'quickview', component: QuickViewComponent },
      { path: 'profile', component:ProfileComponent},
      { path: 'ordersuccessfull', component:OrderPlacedComponent},
      { path: 'cart', component:CartComponent},
      { path: 'wishlist', component:WishlistComponent},
      { path: 'myorder', component:OrderStatusComponent}
      
      

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
