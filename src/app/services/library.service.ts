import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
public BASEURL: string = "http://localhost:3000/books"
  constructor(private httpClient: HttpClient) { }

  public bookData = {
    id: "",
    title: "",
    author: "",
    cover: "",
    genre: "",
    publisher: "",
    reservation: "false",
    state: 0,
  }

  public clearBook () {
    this.bookData = {
      id: "",
    title: "",
    author: "",
    cover: "",
    genre: "",
    publisher: "",
    reservation: "false",
    state: 0, 
    }
  }


  public editBook(item: any) {
    this.bookData = item;
  }

  public showBook(item: any){
    this.bookData = item;
  }

  public getBooks () {
    return this.httpClient.get(this.BASEURL);
 
  }

  public postBook(newBook: any) {
    return this.httpClient.post(this.BASEURL, newBook)
  }

  public deleteBook(bookID: any) {
    return this.httpClient.delete(`${this.BASEURL}/${bookID}`)
  }

  public putBook(bookID: any, editedBook: any) {
    return this.httpClient.put(`${this.BASEURL}/${bookID}`, editedBook)
  }

}
