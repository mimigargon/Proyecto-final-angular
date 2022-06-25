import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';
import { Component, OnInit } from '@angular/core';
import { BooksGalleryInterface} from 'src/app/models/library.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
public bookList : BooksGalleryInterface []=[];
  constructor(private libraryService:LibraryService , private router: Router) { }

  ngOnInit(): void {
  this.libraryService.getBooks().subscribe((data:any)=>{
this.bookList = data;
  })
  }
  public catchBook(book: any){
    this.libraryService.editBook(book);
    this.router.navigate(['/updates'])
  }




}
