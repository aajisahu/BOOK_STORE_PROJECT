import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  wishListArray: any;
  count: any;
  orderListArray: any;
  books: any;
  bookList: any;
  bookList1: any;

  constructor(private orderList: OrderService, private router: Router) { }


  wishlistitems: any;
  whislistitemscount: any;

  ngOnInit(): void {
    this.userOrderListItems();
  }

  /**
  * This method is used for show all the user order in my order page 
  */
  userOrderListItems() {
    this.orderList.getOrderList(localStorage.getItem("Token")).subscribe(
      (data: any) => {
        this.orderListArray = data;
        this.books = data.data.bookModel;
        this.bookList = data.data;
        this.bookList1 = this.bookList.bookModel;
        console.log(data);
        console.log("BookList", this.bookList);
       
      })

    
  }

  // This method is use for navigate to home  
  homeButton() {
    this.router.navigateByUrl('/home/allbooks')
  }



}