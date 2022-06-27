import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public submitted = false;
  public bookForm!: FormGroup;
  public userId = this.userService.userData.username;
  public newUser = this.userService.userData;

  constructor(private formBuilder: FormBuilder,
     private userService: UserService,
     private router: Router) 
    
     { }

  ngOnInit(): void {
    this.userService.clearUser();
    this.bookForm = this.formBuilder.group({
      
      username: [this.newUser.username, [Validators.required, Validators.minLength(4)]],
      password: [this.newUser.password, [Validators.required, Validators.minLength(4)]],
      
    });


    this.bookForm.valueChanges.subscribe((changes)=> {
      this.newUser = changes;
    })
  }
  
  public onSubmit() {
    if(this.userId !== ""){
      this.userService.putUser(this.userId, this.newUser).subscribe();
      alert("user updated");
    }else{
      this.userService.postUser(this.newUser).subscribe();
      alert("user saved")
    }

    this.bookForm.reset();
    this.router.navigate(["/user"])
    
  }

  public delete() {
    this.userService.deleteUser(this.userId).subscribe();
    this.userService.clearUser();
    alert("user deleted");
    this.router.navigate(["/user"])
  }
}
