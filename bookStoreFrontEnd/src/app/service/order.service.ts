import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
 

  constructor( private http:HttpClient) { }

  placeOrder(token: any ,cartList: any) {
   
    return this.http.post(environment.url+"order/placeOrder/"+token,cartList);
  }

  addAddress(token: any , userAddress: any) {

    return this.http.post(environment.url+"order/addAddress/"+token,userAddress);
  }

  getOrderList(token: any) {
    return this.http.get(environment.url+"/order/orderList/"+token)
  }

}


