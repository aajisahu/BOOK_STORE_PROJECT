import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  //After placing Order user can navigate to all books page 
  continueshopping(){
    this.route.navigateByUrl("/home/allbooks");
  }
}