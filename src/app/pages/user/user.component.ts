import { UserInterface } from './../../models/library.interface';
import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   public user!: UserInterface;

  constructor(private libraryService: LibraryService, 
    ) { }

  ngOnInit(): void {
  }

}
