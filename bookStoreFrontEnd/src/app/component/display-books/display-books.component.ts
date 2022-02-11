import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss'],
  template: ` {{ nameSearch }}  `,
})
export class DisplayBooksComponent implements OnInit {

  bookList: any;
  bookscount: number = 0;
  box: any;
  selectedValue: any;
  book: any;
  pagecount: number = 1;
  searchBox!: any;
  filterName: any;
  searchKey: string = "";

  constructor(private matSnackBar: MatSnackBar, private route: Router,
    private bookservice: BookserviceService, private searchName: HomeComponent) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.box = [
      { "value": "Sort by relevance" },
      { "value": "Price : Low to High" },
      { "value": "Price : High to Low" },
      { "value": "Newest Arrivals" }
    ];
    this.selectedValue = this.box[0].value;

    //This Method is used for search books in serachbar
    this.bookservice.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    console.log("BookList" + this.bookList.price);
  }

  //method to sort price
  sorting(event: any) {
    if (this.selectedValue == this.box[1].value) {
      this.getBooksLowToHigh();
    }
    else if(this.selectedValue == this.box[2].value){
      this.getBooksHighToLow();
    }
    else{
      this.getAllBooks();
    }
  }

    //this method is used for display all the books in dashboard
  getAllBooks() {
    this.bookservice.getAllBook().subscribe((data: any) => {
      this.book = data;
      this.bookList = this.book.data;
      this.bookscount = this.bookList.length;
    })
  }

  /*
   * @param book this quickview method is used for get a particular book information
   */
  quickView(book: any) {
    console.log(book.bookId);
    localStorage.setItem('bookId', book.bookId);
    this.route.navigateByUrl('/quickview')
  }

  //This method is used for pagination count increse and decrese
  page() {
    this.pagecount += 1
  }

  //sort price low to high
  getBooksLowToHigh() {
    this.bookservice.getPriceLowToHigh().subscribe((data: any) => {
      this.book = data;
      this.bookList = this.book.data;
      this.bookscount = this.bookList.length;
    })
  }

  //sort price high to low
  getBooksHighToLow() {
    this.bookservice.getPriceHighToLow().subscribe((data: any) => {
      this.book = data;
      this.bookList = this.book.data;
      this.bookscount = this.bookList.length;
    })
  }
}
