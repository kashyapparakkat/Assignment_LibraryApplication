import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from "../user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 /* userSign(item:any){
     alert("success")
  }*/

  constructor(private router:Router, private fb:FormBuilder,private userService:UserService) { }
  submit=false;
// employee:{
//   id:string,
//   name:string,
//   position:string,
//   office:string,
//   salary:number
// }
  signupForm = this.fb.group({
    id:[''],
    fullname:['',[Validators.required,Validators.pattern('^[a-zA-Z \'-]+$')]],
    email:[''],
    pwd:[''],
    mobile:['']
  })
  get f(){
    return this.signupForm.controls;
  }


  onsubmit(){
    this.submit = true
    this.userService.addUser(this.signupForm.value)
    alert("User added successfully!!!")
    console.log("clicked")
    this.router.navigate(['login']);

  }
  ngOnInit(): void {
  }

}
