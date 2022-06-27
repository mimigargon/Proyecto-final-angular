import { UserInterface } from './../../models/library.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { comparePassword } from 'src/app/validations/passwordValidator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public userForm! : FormGroup;
public userID = this.userService.userData.id;
public newUser = this. userService.userData;
  constructor(private fromBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.clearUser();
    this.userForm = this.fromBuilder.group({
      name: [this.newUser.name, [Validators.required, Validators.minLength(3)]],
      email: [this.newUser.email, [Validators.required, Validators.minLength(5)]],
      phone: [this.newUser.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
      username: [this.newUser.username, [Validators.required, Validators.minLength(3)]],
      password: [this.newUser.password, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      repassword: [this.newUser.repassword, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       
    }, {
      validators: comparePassword('password', 'repassword')
    });
    this.userForm.valueChanges.subscribe((changes) => {
      this.newUser = changes;
      console.log(this.newUser);
    })
  }

  public onSubmit() {
    if(this.userID !== "") {
      this.userService.putUser(this.userID, this.newUser).subscribe();
      alert("User saved")
    } else { 
      this.userService.postUser(this.newUser).subscribe();
      alert("User saved");
    }

    this.userForm.reset()
    this.router.navigate(["/user"])
  }

  public delete() {
    this.userService.deleteUser(this.userID).subscribe();
    this.userService.clearUser();
    alert('User deleted')
    this.router.navigate(['/user'])
  }
}
