import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from 'src/app/services/library.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
public submitted : boolean = false;
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
    reservation: [this.newBook.reservation, [Validators.required]]
  });
  this.bookForm.valueChanges.subscribe((changes) => {
    this.newBook = changes;
    console.log(this.newBook);
    
  })
}
public onSubmit() {
  
  if (this.bookID !== "") {

    this.libraryService.putBook(this.bookID, this.newBook).subscribe();
    alert("book saved")
  } else {

    this.libraryService.postBook(this.newBook).subscribe();
    alert("book saved");
  }

  this.bookForm.reset()
  this.router.navigate(["/books"])
} 
public delete() {
  //Le pasamos el id del comic para borrarlo
  this.libraryService.deleteBook(this.bookID).subscribe();
  //Limpiamos el comic para poder seguir usandolo
  this.libraryService.clearBook();
  alert("book deleted")
  this.router.navigate(["/books"])


}


}
