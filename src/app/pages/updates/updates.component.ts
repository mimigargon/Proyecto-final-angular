import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from 'src/app/services/library.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
//public submitted : boolean = false;git 
public bookForm!: FormGroup;
public bookID = this.libraryService.bookData.id;
public newBook = this.libraryService.bookData;
  constructor(private formBuilder: FormBuilder, private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  this.libraryService.clearBook();
  this.bookForm = this.formBuilder.group({
    title: [this.newBook.title, [Validators.required, Validators.minLength(1)]],
    author: [this.newBook.author, [Validators.required, Validators.minLength(3)]],
    cover: [this.newBook.cover, [Validators.required]],
    genre : [this.newBook.genre, [Validators.required, Validators.minLength(1)]],
    publisher: [this.newBook.publisher, [Validators.required, Validators.minLength(4)]],
    reservation: [this.newBook.reservation, [Validators.required,Validators.minLength(1)]],
    state: [this.newBook.state, [Validators.required ]],
  });
  this.bookForm.valueChanges.subscribe((changes) => {
    this.newBook = changes;
    // console.log(this.newBook);
    
  })
}
public   onSubmit() {
  
  if (this.bookID !== "") {
    console.log(this.newBook);
    

     this.libraryService.putBook(this.bookID, this.newBook).subscribe();
    Swal.fire('Book modify');
  } else {

    this.libraryService.postBook(this.newBook).subscribe();
    Swal.fire('Book saved');
  }
setTimeout(() => {
  this.bookForm.reset()
  this.router.navigate(["/books"]) 
}, 275);
 
} 
public delete() {
 
  this.libraryService.deleteBook(this.bookID).subscribe();
  
  this.libraryService.clearBook();
  Swal.fire('Book deleted')
  this.router.navigate(["/books"])


}


}
