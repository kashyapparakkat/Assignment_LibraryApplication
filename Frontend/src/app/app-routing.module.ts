import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {UpdateBookComponent} from "./update-book/update-book.component";
import {ViewBookComponent} from "./view-book/view-book.component";
import {AddBookComponent} from "./add-book/add-book.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewBook',component:ViewBookComponent},
  {path:'addBook',component:AddBookComponent},
  {
    path:'updateBook',
    component:UpdateBookComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
