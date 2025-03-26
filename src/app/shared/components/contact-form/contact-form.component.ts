import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [ReactiveFormsModule , CommonModule]
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Ініціалізація форми з двома полями: ім'я та телефон
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Патерн для номера телефону (10 цифр)
    });
  }

  // Метод для обробки відправлення форми
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Форма надіслана', this.contactForm.value);
    } else {
      console.log('Форма не є валідною');
    }
  }
}
