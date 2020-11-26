import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allUsers:any;

  constructor(public users:UsersService) { 

    
    this.allUsers=users.passdata();
    
  }

  ngOnInit(): void {
  }

}
