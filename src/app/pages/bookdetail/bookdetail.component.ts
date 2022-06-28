import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { DetailInterface } from 'src/app/models/library.interface';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {
  public book!: DetailInterface;
  public bookID = this.LibraryService.bookData.id;
  public newBook = this.LibraryService.bookData;
  
  
  constructor(private LibraryService: LibraryService) { }
  
  ngOnInit(): void {
    
    console.log("bookID",this.bookID);
    console.log("newbook",this.newBook);
    
  }

}
