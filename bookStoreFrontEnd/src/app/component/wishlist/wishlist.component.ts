import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  cartList: any;
  count: any;
  wishListArray: any;

  constructor(private wishList: WishlistService) { }

  wishlistitems: any;
  whislistitemscount: any;

  ngOnInit(): void {
    this. userWishListItems();
  }

  
  //This method is used for show all the wishlist items
  userWishListItems(){
    this.wishList.getUserWishlistItems(localStorage.getItem("Token")).subscribe(
      (data: any) => {
        this.wishListArray=data;
        this.count=this.wishListArray.length;
      })

    // this.router.navigateByUrl('/home/cart');
  }


  // this method not used

  wishlist() {
    this.wishList.addWishList(localStorage.getItem("Token"),this.bookId).subscribe(
      (response: any) => {
        console.log(response);
        this.wishlistitems = response.result;
        this.whislistitemscount = response.result.length;
        console.log(this.wishlistitems)
      }
    )
  }
  bookId(arg0: string | null, bookId: any) {
    throw new Error('Method not implemented.');
  }

  //This method is used for remove wishlist item 
    removeWishListItem(data: any) {
    this.wishList.removeWishListItem(localStorage.getItem("Token"), data).subscribe(
      (response) => {
        console.log(response);
        this.userWishListItems();
      }
    )
   
  }


}
