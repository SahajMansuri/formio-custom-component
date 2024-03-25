import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { GridModule, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FormioCustomComponent } from '../../custom-lib/elements.common';





@Component({
  selector: 'app-syncfusion-data-grid',
  standalone: true,
  imports: [GridModule],
  templateUrl: './syncfusion-data-grid.component.html',
  styleUrl: './syncfusion-data-grid.component.scss'
})
export class SyncfusionDataGridComponent implements OnInit, OnChanges, AfterViewInit, FormioCustomComponent<object> {
  public data!: object
  //create htttp Client Obj
  public client: HttpClient = inject(HttpClient);
  public url = 'https://dummyjson.com/products';
  public pageSettings?: PageSettingsModel = { pageSize: 5 };


  @Input()
  value!: any;

  @Output()
  valueChange = new EventEmitter<object>();

  @Input()
  disabled!: boolean;
  

  constructor() {
    //    API Call by Get method 
    this.client.get(this.url).subscribe((res: any) => {
      this.data = res.products
      // console.log(this.data)
    });
  }

  // public Selected?:object
  ngOnInit(): void {
    console.log(this)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this);
  }

  ngAfterViewInit(): void {
    // Removing POP Syncfusion dialog after 2 seconds
    setTimeout(() => {
      const els = document.querySelectorAll(
        'div[style*="background-color: rgba(0, 0, 0, 0.5)"]'
      );
      els.forEach((e) => {
        e.remove();
      });
    }, 200);
  }

  // The columns variable specifies the column definitions for the grid. 
  // Each column corresponds to a field in the data source.
  public columns: object = [
    { field: 'id', headerText: 'Products', textAlign: 'Right', width: 120 },
    { field: 'title', headerText: 'Title', width: 150 },
    { field: 'price', headerText: 'Price', width: 150 },
    { field: 'brand', headerText: 'Brand', width: 150 },
    { field: 'category', headerText: 'Category', width: 150 }
  ];
  // the rowclick method is triggered, and the selected row’s alert(event data) is passed as an argument $event obj.
  rowClick(event: any): void {
    let Selected = {
      AllProducts: this.data,
      SelectedProducts: event.data
    }
    this.valueChange.emit(Selected);
    this.value = Selected;
    alert(`Selected Product is ${event.data.title}`);
  }
}
