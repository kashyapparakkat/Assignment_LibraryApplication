import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  addUser(user:any){
    console.log("inside add user")
    return this.http.post('http://localhost:3000/api/add-user',user)
      .subscribe(data =>{console.log(data)})
  }
}
