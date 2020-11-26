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
    email: new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    message: new FormControl()
  })
  get name(){return this.angForm.get('name')}
  get email(){return this.angForm.get('email')}
  get gender(){return this.angForm.get('gender')}
  get number(){return this.angForm.get('number')}
  
onsubmit(data:any){
  console.log(this.angForm.value);
}
 

  constructor() {


  }  
    
    
  

    ngOnInit(): void {
    }
  
  }
  