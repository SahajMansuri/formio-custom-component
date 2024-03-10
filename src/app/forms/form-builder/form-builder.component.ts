import { Component } from '@angular/core';
import { Formio, FormioForm, FormioModule } from '@formio/angular';
import { BuilderOption } from '../form-builder-option';
import { FormsModule } from '@angular/forms';

// (Formio as any).use(bootstrap5);
@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [FormsModule, FormioModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  public form: FormioForm;
  public builderOption!: {};

  constructor() {
    this.form = {
      title: '',
      components: []
    };
    this.builderOption = BuilderOption
  }

  onSaveForm() {
    let existingData = localStorage.getItem('FormsJson');

    if (existingData === null) {
      localStorage.setItem('FormsJson', JSON.stringify([this.form]));
    }

    else {
      let formsJson = JSON.parse(existingData);
      let alradyExistForm: boolean = false;
      let alradyExistFormIndex: number = -1;

      formsJson.forEach((form: FormioForm, index: number) => {
        if (form.title === this.form.title) {
          alradyExistForm = true;
          alradyExistFormIndex = index;
        }
      });

      if (alradyExistForm) {
        formsJson[alradyExistFormIndex] = this.form;
      }
      else {
        formsJson.push(this.form);
      }
      localStorage.setItem('FormsJson', JSON.stringify(formsJson));
    }

  }

}
