import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from "../book.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: any = {
    title: "",
    description: "",
    date: "",
    rate: "",
    author: ""
  }

  constructor(private router:Router, private bookService: BookService) {
  }

  ngOnInit(): void {
    let editCourseId = localStorage.getItem("editBookId");
    this.bookService.getBook(editCourseId).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
    })
  }

  editBook() {
    this.bookService.updateBook(this.book)
      .subscribe((data) => {
        alert("book successfully updated")
        console.log(data)
        this.router.navigate(['viewBook']);
      })

  }

}
