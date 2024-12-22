import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrls: ['./contact.component.css'],
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage]
})

export class ContactComponent implements OnInit {
  queryForm!: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit(): void {
    this.queryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]), // Example pattern for numeric input
      message: new FormControl('', Validators.required)
    });
  }

  submitQuery(): void {
    if (this.queryForm.valid) {
      console.log(this.queryForm.value);
      this.formSubmitted = true;  // Set to true when form is valid and submitted
      this.queryForm.reset();  // Optionally reset the form after submission
    } else {
      this.queryForm.markAllAsTouched();
    }
  }

  get name() {
    return this.queryForm.get('name')!;
  }

  get number() {
    return this.queryForm.get('number')!;
  }

  get message() {
    return this.queryForm.get('message')!;
  }
}