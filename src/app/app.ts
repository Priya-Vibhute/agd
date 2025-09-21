import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormHandling1 } from "./form-handling-1/form-handling-1";
import { FormHandling2 } from "./form-handling-2/form-handling-2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormHandling1, FormHandling2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-forms';
}
