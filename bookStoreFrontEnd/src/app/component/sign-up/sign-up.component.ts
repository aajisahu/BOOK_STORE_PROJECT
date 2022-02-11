import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ServiceService } from 'src/app/service/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm:any;
  signupForm:any;
  loginSubmitted = false;

  hide: boolean = true;

  // Login 
  loginEmail:string="";
  loginPassword:string="";
  // signup
  userMobile:string="";
  UserPass:string="";
  userEmail:string="";
  userName:string="";

   
  constructor(private formBuilder: FormBuilder, 
    private snackbar: MatSnackBar, 
    private userService: ServiceService, 
    private router: Router) 
    {
      this.loginForm=formBuilder.group({
        loginEmail:new FormControl(),
        loginPassword:new FormControl()
      });

      this.signupForm=formBuilder.group({
        fullName: new FormControl(),
        email: new FormControl(),
        password:new FormControl(),
        mobileNumber: new FormControl()
      });
   }

  ngOnInit(): void {

    // Once login until logout user can't move to login page
    if (localStorage.getItem("Token")){
      this.router.navigateByUrl('/home/allbooks')
      this.snackbar.open("Please SignOut", '', { duration: 3000 });

    }else{
      this.router.navigateByUrl('');
    }

    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  onSignup(){

    console.log(this.signupForm);
    const newUserData={
      mobileNo:this.signupForm.controls.mobileNumber.value,
      password:this.signupForm.controls.password.value,
      emailId:this.signupForm.controls.email.value,
      fullName:this.signupForm.controls.fullName.value
    }

    this.userService.createUser(newUserData).subscribe(
      (data: any) => console.log(JSON.stringify(data),
      this.snackbar.open(data.message, '', { duration: 3000 }) ));;
   

    console.log(newUserData);
  }

  onLogin() {
    this.loginSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    else {
      const reqPayload = {
        emailId:this.loginForm.value.loginEmail,
        password:this.loginForm.value.loginPassword
      }
      
      console.log(reqPayload);
      console.log(this.loginForm.value);

      this.userService.loginService(reqPayload).subscribe((res: any) => {
        console.log(res);
        console.log("token is "+res.data);
        console.log(res.message);
        localStorage.setItem('Token', res.token);

        /** Storing user data in the local storage */
        localStorage.setItem('emailId', reqPayload.emailId);
        localStorage.setItem('fullName',( res.userDetails.fullName));
        localStorage.setItem('mobileNo',( res.userDetails.mobileNo));
        /**Snackbar implimented for show success message */
        this.snackbar.open(res.message, '', { duration: 3000 });
        this.router.navigateByUrl('/home/allbooks')
       
      }, error => {
        console.log(error);
        this.snackbar.open(" Wrong Id Or Password Check your Credential", '', { duration: 3000 });
      });
      }
  
    }
}
