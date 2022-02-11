import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  baseUrl: string = environment.url;

  constructor(private httpClient: HttpClient, private router: Router) { }

  logoutService() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  userlogin(userData: { password: any; emailId: any; }) {
    return this.httpClient.post(environment.url + `loginuser`, userData)
  }

  createUser(newUserData: { mobileNo: any; password: any; emailId: any; fullName: any; }) {
    return this.httpClient.post(environment.url + `createuser`, newUserData)
  }

  forgotPassword(newUserData: any) {
    return this.httpClient.get(environment.url + `forgotpassword/` + newUserData)
  }

  resetPassword(token: string, newUserData: any) {
    return this.httpClient.post(environment.url + `resetpassword/` + token, newUserData)
  }

  loginService(reqData: any) {
    return this.httpClient.post(environment.url + 'loginuser', reqData);
  }

  
}
