import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartitems: any;
  count: number = 0;
  ordercount: any;
  step1: any;
  step1button: boolean = true;
  step2: any;
  step2button: boolean = true;
  fullname: any;
  mobilenumber: any;
  address: any;
  disabled: boolean = true;
  orderlist: any = [];
  formdata: any;
  alladdress: any;
  addressType: any;
  selectedaddress: any;
  bookList: any;
  book: any;
  quantity: any;
  id: any;
  allbook: any;
  bookData: any;
  cartList: any;
  orderCount: number = 1;
  userFormGroup: any;

  TotalBookOrderPrice: number = 0;


  // @Output() public childEvent=new EventEmitter;

  constructor(private bookservice: BookserviceService, private routes: Router,
    private cartService: CartserviceService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private orderService: OrderService) {
    this.userFormGroup = formBuilder.group({
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    });
  }

  ngOnInit(): void {
   
    //User can't access the cart page until login 
    if (localStorage.getItem("Token") == null){
      this.routes.navigateByUrl('')
      this.snackbar.open("Please Login", '', { duration: 3000 });

    }

    this.userCartItems()
    this.bookList = localStorage.getItem("bookId");
    this.fullname = localStorage.getItem("fullName");
    this.mobilenumber = localStorage.getItem("mobileNo");
  }
  /**
   * this method is used to show count
   */
  userCartItems() {
    this.cartService.getUserCartItems(localStorage.getItem("Token")).subscribe(
      (data: any) => {
        this.cartList = data;
        this.count = this.cartList.length;
      })

    // this.router.navigateByUrl('/home/cart');
  }

  /**
   * 
   * This method is used to book from cart
   */

  removecartitem(data: any) {
    this.cartService.removecartitem(localStorage.getItem("Token"), data).subscribe(
      (response) => {
        console.log(response);
        this.userCartItems()
      }
    )
  }


  /**
   * 
   * @param data This method is used for increase the count of a prticular book quantity
   */
  countincrease(data: any) {

    data.quantityInCart += 1;
    data.noOfBooks -= 1;

  }

  /**
   * 
   * @param data This method is used for decrese the count of a prticular book quantity
   */
  countdecrease(data: any) {
    if (data.quantityInCart > 1) {
      data.quantityInCart -= 1;
      data.noOfBooks += 1;
    }

  }

  /**
   * 
   * @param index this method is accepting one boolean parameter, if the intex is true then is wil expend the address part then all order part  
   */
  setStep(index: any) {
    if (index == 1) {
      this.step1 = true;
      this.step1button = false;
    }
    else if (index == 2) {
      this.step2 = true;
      this.step2button = false;
    }
  }

  /**
   * this method used while palcing the order in this method accepting user address and all the books details like quantity of the books and total price of order
   */
  addressdata() {

    const userAddress = {
      address: this.userFormGroup.controls.address.value,
      city: this.userFormGroup.controls.city.value,
      state: this.userFormGroup.controls.state.value

    }

    this.orderService.addAddress(localStorage.getItem("Token"), userAddress).subscribe(
      (response) => {
        console.log(response);
        this.userCartItems()
        
      }
    )

    this.orderService.placeOrder(localStorage.getItem("Token"), this.cartList).subscribe(
      (response) => {
        console.log(response);
        this.userCartItems()
        
      }
    )
    console.log(userAddress, this.cartList);
  }


  /**
   * This method is used for Total price of the user cart items
   */
  totalPrice() {

    for (let i = 0; i < this.cartList.length; i++) {

      this.TotalBookOrderPrice += (this.cartList[i].price * this.cartList[i].quantityInCart);
    }
    console.log(this.TotalBookOrderPrice);

  }

  homeButton() {
    this.routes.navigateByUrl('/home/allbooks')
  }



}