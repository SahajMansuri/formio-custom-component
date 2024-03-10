// export class FormBuilderOption {
// }
export const BuilderOption = {


    //Our Custom Tag not be allowed by DOMPurify sanitizing
    // So 
    sanitize:true,
    sanitizeConfig: {
      allowedTags: ['','my-rating','sync-grid'],
      addTags: ['','my-rating','sync-grid']
    },
  
  
  
    builder: {
   
      basic: {
        default: false,
        weight: 1,
        components:{
        }
      },
  
       // TAb -c1
  
      _custom: {
        title: ' Default Tab',
        weight: -1,
        default: false,
        components: {
          
        },
      },
    
      // TAb - 2
  
      syncfusion: {
        title: 'syncfusion Grid',
        weight: 0,
        components: {
          DataGrid: {
            title: 'Fomio Grid ',
            key: 'Data Grid',
            icon: 'th',
            schema: {
              label: 'Custom Data Grid',
              key: 'dataGrid',
              type: 'datagrid',
              clearOnHide: true,
              input: true,
              tree: true,
              defaultValue: "Sahaj Set default Value🤞 ",            
              dataSrc: 'custom',
              data: {
                custom:"values = Mansuri "
              },
              components: []
  
            }
        },
          firstName: {
            title: 'First Name',
            key: 'firstName',
            icon: 'terminal',
            schema: {
              label: 'First Name',
              type: 'textfield',
              key: 'firstName',
              input: true,
              defaultValue: "Sahaj Set default Value🤞",
              dataSrc: 'custom',
                data: {
                  custom:"values = Mansuri "
                },
               
           
            }
          },
        }
      },
  
    }
  }
  
  
