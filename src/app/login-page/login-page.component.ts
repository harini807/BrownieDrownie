import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../Models/user-model';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm!:FormGroup;
  loginservice: LoginService;
  ValidateData: UserModel;
  changerouter: Router;

  constructor(private fb:FormBuilder, private ser:LoginService, private router:Router){ 
    this.loginservice = ser;
    this.changerouter = router;
  }
  ngOnInit():void{
    this.loginForm = this.fb.group({
      PhoneNo:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  uLog: number;
  aLog: number;
  errorValue: string = "";
  erroValue1: string = "";
  ResetVar(){
    this.errorValue="";
    this.erroValue1 = "";
  }
  OnSubmit(){
    let l:UserModel = new UserModel();
    l.PhoneNo = this.loginForm.value.PhoneNo
    l.Password = this.loginForm.value.Password
   this.loginservice.ValidateUser(l).subscribe(data=>{this.uLog=data
        console.log(this.loginForm.value);
        console.log(this.uLog);      
  if(this.uLog==1){
    localStorage.setItem("PhoneNo",l.PhoneNo);
    localStorage.setItem("IsLogged","True");
    localStorage.setItem("IsAdmin","False");
    alert("Logged In");
    this.changerouter.navigate(['../Categories']);
  }
  else if(this.uLog == 0){
    this.errorValue = "Incorrect Password"
  }
  else if(this.uLog == -1){
    this.erroValue1 = "Username not registered"
  }
  });

if(this.loginForm.valid){
      //send the object to database
      console.log(this.loginForm.value);

    }
    else
    {
      //throw the error using toaster and with required fields
      console.log("Form is not valid");
      this.validateAllFormFields(this.loginForm);
      alert("your form is invalid")
    }
  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
}