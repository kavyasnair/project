import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import {UsersService} from '../users.service';
 
@Component({
  selector: 'app-formn',
  templateUrl: './formn.component.html',
  styleUrls: ['./formn.component.css']
})
export class FormnComponent implements OnInit {
  
  

  angForm= new FormGroup({
    name: new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    number: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    message: new FormControl()
  })

  get name(){
    return this.angForm.get('name') as FormControl;
  }
  get email(){
    return this.angForm.get('email') as FormControl;
  }
  get gender(){
    return this.angForm.get('gender') as FormControl;
  }
  get number(){
    return this.angForm.get('number') as FormControl;
  }
  


  constructor(public users:UsersService) {}
  /*to get values from form*/
    onsubmit(){
      
      this.users.setdata(this.angForm.value)
     
    
     

  }  
    
    
  

    ngOnInit(): void {
    }
  
  }
  