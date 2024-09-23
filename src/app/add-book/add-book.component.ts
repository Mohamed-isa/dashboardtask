import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookForm: FormGroup;
  MatDatepickerControl:any;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      isbn: ['', Validators.required],
      name: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['', Validators.required],
      details: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      branch: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log('Form Data:', this.bookForm.value);
      // Here you can handle the data, e.g., send it to your backend
    } else {
      console.log('Form is invalid');
    }
  }
}
