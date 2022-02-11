import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm:any;
  hide=true;
  loginEmail:string="";
  token!:string;


  constructor(private formBuilder:FormBuilder, private service:ServiceService, private route: ActivatedRoute) { 

    this.resetForm=formBuilder.group({
      password:new FormControl(),
      confirmpassword:new FormControl()
    });
  }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.token=this.route.snapshot.params['token']
    
    this.resetPass();
  }

  // /User can reset their password
  resetPass(){

    let newUserData:any={
      password:this.resetForm.controls.password.value
    }

    this.service.resetPassword(this.token, newUserData).subscribe((data: any) =>
    console.log(JSON.stringify(data))
    );;
    console.log(this.resetForm.controls.password.value);

  }
}