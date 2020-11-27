import { Component, OnInit } from '@angular/core';
import { SortingPipe } from '../sorting.pipe';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /*public pieChartLabels=['male','female'];
  public pieChartData : any=[{
    data:[]
  }];*/

  allUsers:any;

  /*public pieChartType='pie'

  all: any
  fe=0
  mal=0
  UsersService: any;*/

  constructor(public users:UsersService) { 

    
    
    this.allUsers=users.passdata();
    
  }

  ngOnInit(): void {

    /*this.UsersService.passdata();{
      this.all=data
      this.all.forEach((item: any,i: any)=>{
        if(item.gender=="fe"){
          this.fe=this.fe +1
        }
        if(item.gender=="mal"){
          this.mal=this.mal +1
        }
      })
      this.allUsers=this.all
      this.pieChartData=[this.fe,this.mal]
      console.log(this.fe)
    }
  */}
  
  sortByProperty(property: any){
    return function (a: any,b: any) {
      if(a[property]>b[property])
      return 1;
      else if(a[property]<b[property])
      return -1;

      return 0;

      
    }
  }
  Sort(){
    this.allUsers.sort(this.sortByProperty("name"));
    
  }
  Sortn(){
    this.allUsers.sort(this.sortByProperty("gender"));
    
  }
  

}
