import Swal  from 'sweetalert2';
import { UserInterface } from './../../models/library.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { comparePassword } from 'src/app/validations/passwordValidator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public userForm : FormGroup;
public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      repassword: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       
    }, {
      validators: comparePassword('password', 'repassword')
    })

  }
  ngOnInit(): void {
    }
    public onSubmit() {
      this.submitted = true;
      if (this.userForm.valid) {
        const user: UserInterface = {
          username: this.userForm.get('username')?.value,
          password: this.userForm.get('password')?.value,
          repassword: this.userForm.get('repassword')?.value
        }
        Swal.fire("Usuario generado con éxito")
       
        this.userForm.reset();
        
        this.submitted = false
    
    }
    
    
    }
}


