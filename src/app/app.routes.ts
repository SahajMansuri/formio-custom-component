import { Routes } from '@angular/router';
import { FormBuilderComponent } from './forms/form-builder/form-builder.component';
import { FormRendererComponent } from './forms/form-renderer/form-renderer.component';

export const routes: Routes = [
    {path:'form-builder', component:FormBuilderComponent},
    {path:'form-renderer',component:FormRendererComponent}
];
