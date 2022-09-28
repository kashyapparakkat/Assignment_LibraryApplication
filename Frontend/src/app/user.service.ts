import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_Address: String = "http://localhost:3000/"
  //server_Address: String = ""

  constructor(private http : HttpClient) { }

  addUser(user:any){
    console.log("inside add user")
    //return this.http.post('http://localhost:3000/api/add-user',user)
    return this.http.post(this.server_Address+"api/add-user",user)
      .subscribe(data =>{console.log(data)})
  }
}
