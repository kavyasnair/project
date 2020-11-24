import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any

  constructor() { 

    this.list=[

      {
        "No":1,
        "Name":"John doe",
        "Gender":"Male",
        "Email":"johndoe@gmail.com",
        "Number":9123456789,
        "Message":"Loreum lpsum is sim"
        
      },
      {
        "No":2,
        "Name":"Richard",
        "Gender":"Male",
        "Email":"richard@gmail.com",
        "Number":9123456789,
        "Message":"Loreum lpsum is sim"
        
      },
      {
        "No":3,
        "Name":"Michelle",
        "Gender":"Female",
        "Email":"michelle@gmail.com",
        "Number":9123456789,
        "Message":"Loreum lpsum is sim"
        
      },
      {
        "No":4,
        "Name":"John doe",
        "Gender":"Male",
        "Email":"johndoe@gmail.com",
        "Number":9123456789,
        "Message":"Loreum lpsum is sim"
        
      },
      {
        "No":5,
        "Name":"Linda F",
        "Gender":"Female",
        "Email":"lindaf@gmail.com",
        "Number":9123456789,
        "Message":"Loreum lpsum is sim"
        
      }
      
      


    ]

  }

  ngOnInit(): void {
  }

}
