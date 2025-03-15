import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   myData: FormGroup;

   constructor() {
       this.myData = new FormGroup({
           prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
           nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
           email: new FormControl('', [Validators.required,Validators.email, Validators.minLength(6)]),
           message: new FormControl('', [Validators.required, Validators.minLength(10)]),
       })
   }

    onSubmit() {
       if (this.myData) {
           console.log(this.myData.value);
       }
    }
}
