import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../../custom-lib/elements.common';
import { SyncfusionDataGridComponent } from './syncfusion-data-grid.component';
import { registerCustomFormioComponent } from '../../custom-lib/register-custom-component';
import { Components } from '@formio/angular';


let editForm = () => {
  const listComp = Components.components.textfield.editForm();
 
  listComp.components[0]['components'].push({
    key: 'setting',
    label: 'Setting', 
    components: [
      {
        weight: 70,
        type: 'textfield',
        input: true,
        key: 'Data',
        label: 'Data',
        placeholder: 'Enter Data',
      },

    ],
    
  });
  return listComp;
};


const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'syncgrid',
  selector: 'sync-grid',
  title: 'Sync Grid',
  group: 'syncfusion',
  icon: 'table',
  editForm: editForm
};

export function registerSyncfusionGridComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, SyncfusionDataGridComponent, injector);
}