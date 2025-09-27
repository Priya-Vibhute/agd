import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-handling-2',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form-handling-2.html',
  styleUrl: './form-handling-2.css'
})
export class FormHandling2 {

  userForm !:FormGroup;

  constructor(private fb :FormBuilder)
  {

    this.userForm= this.fb.group(
      {
        name :['',[Validators.required,Validators.minLength(3)]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      }
    )

  }


  onSubmit()
  {
    console.log(this.userForm);
  }

}
