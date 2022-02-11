import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  public search=new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }


  getBookById(bookId: any) {
    return this.http.get(environment.bookUrl+"getBookDetailsByID/"+bookId);
  }

  getAllBook(){
    return this.http.get(environment.bookUrl+"getBookDetails");
   
  }
  getPriceLowToHigh(){
    return this.http.get(environment.bookUrl+"sortByPriceAsc");
  }

  getPriceHighToLow(){
    return this.http.get(environment.bookUrl+"sortByPriceDsc");
  }

  /**
   * Cart services
   */



  updateitemcount(productID: any, payload: any) {
    console.log('dsdsd', payload);

    return this.http.put(environment.url + "/bookstore_user/cart_item_quantity/" + productID, payload);
  }

  getCartItems(token:any) {

    return this.http.get(environment.url + "cart/GetCartBookList/"+token);
  }

  removecartitem(productID: any) {

    return this.http.delete(environment.url + "/bookstore_user/remove_cart_item/" + productID);
  }



  /**
   * 
   * Order place
   * 
   */
  orderplace(payload: any) {

    return this.http.post(environment.url + "/bookstore_user/add/order", payload);
  }


  addwishlist(productID: any) {

    return this.http.post(environment.url + "/bookstore_user/add_wish_list/" + productID, null);
  }

  removewishlistitem(productID: any) {


    return this.http.delete(environment.url + "/bookstore_user/remove_wishlist_item/" + productID);
  }

  updateaddress(payload: any) {


    return this.http.put(environment.url + "/bookstore_user/edit_user", payload);
  }

  getwishlist() {


    return this.http.get(environment.url + "/bookstore_user/get_wishlist_items")
  }





}
