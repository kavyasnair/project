import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}
    data: string=''
    
    setdata(x: any){
      
      this.data=x;
      
      this.sec.push(x);
      
      
    }
    sec=[
      {no:'1',name:'john',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'2',name:'lal',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'3',name:'ammu',gender:'female',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'4',name:'hari',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'5',name:'vimal',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'}
    ];
    passdata(){
      let data=this.sec;
      return data;
    }
   

  
}

