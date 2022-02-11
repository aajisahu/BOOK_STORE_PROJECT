import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

 

  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getUserCartItems(token: any ) {
    return this.http.get(environment.url+"cart/GetCartBookList/"+token);
  }

  addcartitem(token:any ,productID: any) {
    return this.http.get(environment.url+"cart/addbookCart/"+token+"/"+productID)
    ;
  }

  removecartitem(token: any,bookId:any) {
    return this.http.get(environment.url+"cart/deleteBookFromCart/"+token+"/"+bookId);
  }

  




  getTotalPrice():number {
    let getTotalPrice =0;
    this.cartItemList.map((a:any)=>{
      getTotalPrice+=a.total;
    })
    return getTotalPrice;
  }
}

