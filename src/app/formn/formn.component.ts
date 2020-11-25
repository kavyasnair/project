import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

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

onsubmit(){
  console.log(this.angForm.value);
}

  constructor() {
  }  
    
    
  

    ngOnInit(): void {
    }
  
  }
  