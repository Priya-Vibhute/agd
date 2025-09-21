import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handling-1',
  imports: [FormsModule],
  templateUrl: './form-handling-1.html',
  styleUrl: './form-handling-1.css'
})
export class FormHandling1 {

  user={ email :"", password:""}

  onSubmit(form :NgForm)
  {
    console.log(form);
    
    console.log("Form Submitted",this.user);
    
  }

}
