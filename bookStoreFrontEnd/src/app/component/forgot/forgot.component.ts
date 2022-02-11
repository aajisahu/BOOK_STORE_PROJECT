import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgotPass:any;

  loginEmail:string="";

  constructor(private formBuilder:FormBuilder, private service:ServiceService) { 
    this.forgotPass=formBuilder.group({
      loginEmail:new FormControl(),
    });
  }

  ngOnInit(): void {
    this.forgotPass = this.formBuilder.group({
       loginEmail: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]]
    });
    
  this.forgotClick();
  }

  /**
   * this method is used for forget password user can reseet password 
   */
  forgotClick(){

    this.service.forgotPassword(this.forgotPass.controls.loginEmail.value).subscribe((data: any) =>
    console.log(JSON.stringify(data))
    );;
    console.log(this.forgotPass.controls.loginEmail.value);
  }
}