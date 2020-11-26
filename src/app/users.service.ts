import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

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

