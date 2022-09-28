import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book={
    title: "",
    description: "",
    date: "",
    rate: "",
    author: ""
  }

  constructor(private bookService: BookService) { }



  addNewBook(){
    console.log(this.book)
    this.bookService.addBooks(this.book).subscribe(data =>{
      alert("Book successfully addded")
      console.log(data)})
  }

  ngOnInit(): void {
  }

}
