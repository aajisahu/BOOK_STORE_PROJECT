import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  edit: boolean = true;
  fullName=localStorage.getItem('fullName');
  email=localStorage.getItem('emailId');
  number=localStorage.getItem('mobileNo');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
   // This method is use for navigate to home  
  homeButton() {
    this.router.navigateByUrl('/home/allbooks')
  }


}