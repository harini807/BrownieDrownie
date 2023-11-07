import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../Services/register.service';
import { Router } from '@angular/router';
import { UserModel } from '../Models/user-model';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  SignUp!:FormGroup;
 
  onSubmit(){
    if(this.SignUp.valid){
      //send the object to database
      console.log(this.SignUp.value);

    }
    else
    {
      //throw the error using toaster and with required fields
      console.log("Form is not valid");
      this.validateAllFormFields(this.SignUp);
      alert("your form is invalid")
    }
  }
  ngOnInit(): void{
    this.SignUp = this.fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      PhoneNo:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  regService: RegisterService;
  changerouter: Router;
  constructor(private fb: FormBuilder, private ser:RegisterService, private router:Router){
    this.regService = ser;
    this.changerouter = router;
   }
   status: boolean;

   submitData(){
    let user:UserModel = new UserModel();
    user.FirstName = this.SignUp.value.FirstName;
    user.LastName = this.SignUp.value.LastName;
    user.PhoneNo = this.SignUp.value.PhoneNo;
    user.Password = this.SignUp.value.Password;
    this.regService.RegisterUser(user).subscribe(data=>{this.status=data 
    console.log(this.SignUp.value.Password);
    console.log(this.SignUp.value);
    console.log(this.status);
    if(this.status == true){
      alert("Registered successfully");
      this.changerouter.navigate(["../login"]);
    }
    else{
      alert("Registration Unsuccessfull!!")
    }
    
    
    });
   }
   errorMsg: string = "";
   CheckPassword(){
    if(this.SignUp.get("Password").value!=this.SignUp.get("ConfirmPassword").value){
      this.errorMsg = "Password Not matching"
    }
    else{
      this.errorMsg = ""
    }
    console.log(this.errorMsg)
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
