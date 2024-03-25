import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Formio, FormioForm, FormioModule } from '@formio/angular';

@Component({
  selector: 'app-form-renderer',
  standalone: true,
  imports: [CommonModule, FormioModule],
  templateUrl: './form-renderer.component.html',
  styleUrl: './form-renderer.component.scss'
})
export class FormRendererComponent {
  public formTemplates!: FormioForm[];
  public selectedTemplate!: any;
  public submitedTemplate!: {};
  public isTemplateSelected: boolean = false;
  public isDataSubmited: boolean = false;
  FormSubmitJson?: string;

  ngOnInit(): void {
    let existingData = localStorage.getItem('FormsJson');
    if (existingData !== null) {
      this.formTemplates = JSON.parse(existingData);
    }
  }

  renderTemplate(event: any) {
    if (event.target.value == -1) {
      this.isTemplateSelected = false;
    }
    else {
      this.isTemplateSelected = true;
      this.isDataSubmited = false;
      this.selectedTemplate = this.formTemplates[event.target.value];
      Formio.createForm(
        document.getElementById('formio'),
        this.selectedTemplate,
        {
          sanitize: true,
          sanitizeConfig: {
            allowedTags: ['sync-grid', 'my-rating', ''],
            addTags: ['sync-grid', 'my-rating', '']
          }
        }
      ).then((form: any) => {
        form.on('submit', (submission: any) => {
          console.log(submission);
          this.FormSubmitJson = JSON.stringify(submission.data, null, 4);
        });
      })
    }
  }
}
