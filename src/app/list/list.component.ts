import { Component, OnInit } from '@angular/core';
import { SortingPipe } from '../sorting.pipe';
import {UsersService} from '../users.service';
import {ChartOptions,ChartType} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
/*pie chart*/
  allUsers:any;
  pieChartOptions:ChartOptions= {
    responsive:true,
    
    
  };

  pieChartLabels: Label[] = ['female','male'];
 
  pieChartType: ChartType= 'pie';
  pieChartColors=[
    {
      backgroundColor:['rgba(30,144,255)','rgba(0,0,0)']
    }
  ]
  
  pieChartPlugins= [];
  pieChartData: any=[
    {
      allUsers:[]
    }
  ];
  
  female=0
  male=0
  

  

  constructor(public users:UsersService) { 

    
    
    this.allUsers=users.passdata();
    
    
    
    
  }
/*Count*/
  ngOnInit(): void {
    
    
      this.allUsers.forEach((item: any,i: any)=>{
        item.no=i+1;
      });
      this.allUsers.forEach((item: any,i: any)=>{
        if(item.gender=="female"){
          this.female=this.female +1
        }
        if(item.gender=="male"){
          this.male=this.male +1
        }
      });
      
      this.pieChartData=[this.female,this.male]
      
    }
  
 
  /*Sorting*/
  
  key:string='no';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;

  }

}
