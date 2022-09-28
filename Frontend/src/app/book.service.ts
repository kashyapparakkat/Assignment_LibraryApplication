import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  addBooks(books: any){
    return this.httpClient.post<any>('http://localhost:3000/api/add-book',books)
  }

  getBook(id:any){
    return this.httpClient.get("http://localhost:3000/api/book/"+id);
  }

  getBooks(){
    return this.httpClient.get<any>("http://localhost:3000/api/get-all-books");
  }

  updateBook(book: any)
  {

    return this.httpClient.put<any>("http://localhost:3000/api/update-book", book)

  }

  deleteBook(id:any)
  {

    return this.httpClient.delete<any>("http://localhost:3000/api/remove-book/"+id)

  }
}
