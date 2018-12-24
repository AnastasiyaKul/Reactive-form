import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

enum Skill {
  JS = 'js',
  TS = 'ts',
  HTML = 'html',
  CSS = 'css',
  Angular = 'angular'
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  configs = [{
    type: 'text',
    label: 'first name',
    name: 'first Name',
    placeholder: 'enter your name',
    isInput: true
  }, {
    type: 'number',
    label: 'age',
    name: 'age',
    placeholder: 'enter your age',
    isInput: true
  }, {
    type: 'select',
    label: 'skills',
    name: 'skills',
    options: Object.keys(Skill),
    isInput: false
  }];

  initForm() {
    const controlsConfig = {};
    for (const config of this.configs) {
      controlsConfig[config.name] = '';
    }
    this.reactiveForm = this.fb.group(controlsConfig);
  }
}
