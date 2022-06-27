import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public BASEURL: string = "http://localhost:3000/user"
  constructor(private httpClient: HttpClient) { }

  public userData = {
    id: "",
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    repassword: "",
    books: [],
  
  }

  public clearUser () {
    this.userData = {
      id: "",
      name: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      repassword: "",
      books: [],
    }
  }

  public editUser(item: any) {
    this.userData = item;
  }

  public getUser () {
    return this.httpClient.get(this.BASEURL);
  }

  public postUser(newUser: any) {
    return this.httpClient.post(this.BASEURL, newUser)
  }

  public deleteUser(userID: any) {
    return this.httpClient.delete(`${this.BASEURL}/${userID}`)
  }

  public putUser(userID: any, editedUser: any) {
    return this.httpClient.put(`${this.BASEURL}/${userID}`, editedUser)
  }
}
