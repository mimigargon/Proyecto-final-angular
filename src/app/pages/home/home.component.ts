import  Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/library.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public submitted = false;
  public userForm!: FormGroup;
  public userId = this.userService.userData.username;
  public newUser = this.userService.userData;
  public userList : UserInterface []=[];
  constructor(private formBuilder: FormBuilder,
     private userService: UserService,
     private router: Router) 
    
     { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data:any)=>{
      this.userList = data;
      // console.log(this.userList);
    });
   
    this.userForm = this.formBuilder.group({
      
      username: [this.newUser.username, [Validators.required, Validators.minLength(4)]],
      password: [this.newUser.password, [Validators.required, Validators.minLength(4)]],
      
    });


    this.userForm.valueChanges.subscribe((changes)=> {
      this.newUser = changes;
    })
  }

  
  
  public onSubmit() {
    const result = this.userList.find(
      (user) =>
        user.username === this.newUser.username && user.password === this.newUser.password
    );
    if(result){
      this.router.navigate(["/user"])
    }else{
  
    this.userForm.reset();
    Swal.fire("Usuario y contraseña incorrectas")
    }
    
  }


}
