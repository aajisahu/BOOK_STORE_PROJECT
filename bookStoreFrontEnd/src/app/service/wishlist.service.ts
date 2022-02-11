import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 
 
  constructor(private http: HttpClient, private router: Router) { }

  addWishList(token:any ,productID: any) {
    return this.http.get(environment.url+"wishlist/addbookWishlist/"+token+"/"+productID);
  }
  getUserWishlistItems(token: any ) {
    return this.http.get(environment.url+"wishlist/getWishlistofUser/"+token);
  }

  removeWishListItem(token:any ,productID: any) {
    return this.http.get(environment.url+"wishlist/deleteBookFromWishList/"+token+"/"+productID);
  }


}
