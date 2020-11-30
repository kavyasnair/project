import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators} from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string | undefined;
  password:string | undefined;
  
  loginForm= new FormGroup({
   
    ema: new FormControl('',[Validators.required,Validators.email]),
    pas: new FormControl('',Validators.required),
    
  })
  
  get ema(){
    return this.loginForm.get('ema') as FormControl;
  }
  get pas(){
    return this.loginForm.get('pas') as FormControl;
  }
  
  constructor(private router:Router) { }

  

  ngOnInit(): void {

  
  }
  login(){

    if(this.email=="admin@gmail.com" && this.password =="admin123"){
      this.router.navigateByUrl("form");
    }

    else{
     alert("Please Enter Valid Details");
    }
    
  }
  
  
}
