import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]/)]],
      email: ['', [Validators.required, Validators.email]],
      confirm: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
      skill: ['', [Validators.required]]
    });
  }

  isEmpty(inpName: string): boolean {
    const value = this.form.controls[inpName];
    return !value.dirty && value.touched;
  }

  isUncorrect(inpName: string): boolean {
    const value = this.form.controls[inpName];
    return value.invalid && value.touched;
  }
}
