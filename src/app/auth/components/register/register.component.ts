import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm= new FormGroup({
   
    ema: new FormControl('',[Validators.required,Validators.email]),
    pas: new FormControl('',Validators.required),
    
  })
  
  get ema(){
    return this.regForm.get('ema') as FormControl;
  }
  get pas(){
    return this.regForm.get('pas') as FormControl;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
