import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
public BASEURL: string = "http://localhost:3000/books"
  constructor(private httpClient: HttpClient) { }

  public userData = {
      id:"",
      username:"",
      password:"",
      books: "",
      member:"",
      reservations: "",
  }
  
  public clearUser() {
    this.userData = {
      id:"",
      username:"",
      password:"",
      books: "",
      member:"",
      reservations: "",
    }
   
  }

  public bookData = {
    id: "",
    title: "",
    author: "",
    cover: "",
    genre: "",
    publisher: "",
    reservation: ""
  }

  public clearBook () {
    this.bookData = {
      id: "",
    title: "",
    author: "",
    cover: "",
    genre: "",
    publisher: "",
    reservation: "", 
    }
  }

  public editUser(item:any){
    this.userData = item;
  }

  public editBook(item: any) {
    this.bookData = item;
  }

  public getBooks () {
    return this.httpClient.get(this.BASEURL);
 
  }

  public postUser(newUser:any){
    return this.httpClient.post(this.BASEURL, newUser)
  }
  public putUser(userId: any, editedUser: any) {
    return this.httpClient.put(`${this.BASEURL}/${userId}`, editedUser)
  }

  public deleteUser(userId: any) {
    return this.httpClient.delete(`${this.BASEURL}/${userId}`)
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
