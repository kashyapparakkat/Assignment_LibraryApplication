import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {BookService} from "../book.service";


@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  books: any={
    id: "",
    title: "",
    description: "",
    date: "",
    duration: "",
    venue: ""
  }

  constructor(private router:Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  editBook(book: any) {
    localStorage.setItem("editBookId", book.id.toString());
    this.router.navigate(['updateBook']);
  }

  deleteBook(book:any) {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter((p: any) => {
          p !== book
        });
      })
  }


}
