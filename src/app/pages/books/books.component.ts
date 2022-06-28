import { UpdatesInterface } from './../../models/library.interface';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
public bookList : UpdatesInterface []=[];
  constructor(private libraryService:LibraryService , private router: Router) { }

  ngOnInit(): void {
  this.libraryService.getBooks().subscribe((data:any)=>{
this.bookList = data;
console.log(data);
  })
  }
  public catchBook(book: any){
    this.libraryService.editBook(book);
    this.router.navigate(['/updates'])
  }

  public bookDetail(book: any){
    this.libraryService.showBook(book);
    this.router.navigate(['/detail']);
  }




}
