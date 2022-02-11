import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { CartComponent } from '../cart/cart.component';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],

})
export class QuickViewComponent implements OnInit {
  review: any;
  book: any;
  bookId: any;
  data: any;
  orderCount = 1;
  addToBagHide: boolean = true;
  countHide: boolean = false;
  clicked1: boolean = false;
  clicked2: boolean = false;
  bookList: any;
  message: any;

  constructor(private snackbar: MatSnackBar, private router: Router,
    private bookService: BookserviceService,
    private cartService: CartserviceService,
    private wishList: WishlistService,) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    this.bookDetails();
  }


  /**
   * This method is used to a prticular book info like comment ,total book Quntity availabe price , image, book details
   */
  bookDetails() {
    this.bookService.getBookById(this.bookId).subscribe(data => {
      this.book = data;
      this.bookList = this.book.data;
      // console.log(this.bookList.authorName);
      // console.log(this.bookList.price);

    })
  }

  /**
   * User can add book to cart by using add to cart button
   */
  addToCart() {

    if (localStorage.getItem("Token") == null) {
      this.router.navigateByUrl('')
      this.snackbar.open("Please Login", '', { duration: 3000 });
    }

    this.addToBagHide = false;
    this.cartService.addcartitem(localStorage.getItem("Token"), this.bookId).subscribe(
      (response: any) => {
        this.snackbar.open(response.data, "", { duration: 1800, })
      })

  }

  /**
     * User can add book to Wish List by using wishlist button
     */
  wishlist() {

    if (localStorage.getItem("Token") == null) {
      this.router.navigateByUrl('')
      this.snackbar.open("Please Login", '', { duration: 3000 });
    }

    this.wishList.addWishList(localStorage.getItem("Token"), this.bookId).subscribe(
      (response: any) => {
        this.snackbar.open(response.message, "", { duration: 1800, })
      }
    )
  }

  homeButton() {
    this.router.navigateByUrl('/home/allbooks')
  }
}
