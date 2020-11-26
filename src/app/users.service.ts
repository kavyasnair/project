import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}
    private data={
      name:"",
      gender:"",
      email:"",
      number:"",
      message:""
    };
    
    setdata(x:any){
      console.log(x)
      this.data=x;
      this.sec.push(x);
      
    }
    sec=[] as any;
    passdata(){
      let data=this.sec;
      console.log(data,'from get call')
      return data;
    }
   

  getAllUser()
  {
    return[
      {no:'1',name:'john',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'2',name:'lal',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'3',name:'ammu',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'4',name:'hari',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'},
      {no:'5',name:'vimal',gender:'male',email:'johndoe@gmail.com',number:'9123456789',message:'Loreum lpsum is sim'}
    ]
  }
}

