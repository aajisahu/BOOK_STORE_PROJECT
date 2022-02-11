import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { ServiceService } from 'src/app/service/service.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `
    <app-display-books [nameSearch]="nameSearch"></app-display-books>`,
})
export class HomeComponent implements OnInit {

  count: number = 0;
  name: any;
  nameSearch: string = 'nameSearch String';
  cartList: any;

  public searchTerm:string='';


  constructor(private userService: ServiceService,
    private snackbar: MatSnackBar,
    private router: Router,
    private cartService: CartserviceService,
    private bookService:BookserviceService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("fullName");
    this.uuserCartItems()

  }


  /**
   * 
   * @param event this method is used for search bar user can search any books accroding to their need 
   */
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log("Search Term",this.searchTerm);
    this.bookService.search.next(this.searchTerm);
  }


/**
 * callign the logout method for logout a user
 */
  onSignOut() {

    this.userService.logoutService();
    this.snackbar.open('Sign Out Successfully', '', { duration: 3000 });
  }

  /**
   * this method is used for show the cart items of user
   */
  cart() {
    this.uuserCartItems();
    this.router.navigateByUrl('/home/cart');
  }

  /**
   * this method is used for show user profile
   */
  toProfile() {
    console.log(this.nameSearch);
    this.router.navigateByUrl('/home/profile');
  }

  /**
   * this method is used for navigate the user to myOrder page
   */
  myOrders() {
    this.router.navigateByUrl('/home/myorder');
  }

  wishList() {
    this.router.navigateByUrl('/home/wishlist')
  }

/**
 * callign the usercart item to shwo the user cart and show the count 
 */
  uuserCartItems() {
    this.cartService.getUserCartItems(localStorage.getItem("Token")).subscribe(
      (data: any) => {
        this.cartList = data;
        this.count = this.cartList.length;
      })
  }
}
