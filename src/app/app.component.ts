import { Component, Injector } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { registerRatingComponent } from './CustomComponent/rating-wrapper/rating-wrapper.formio';
import { registerSyncfusionGridComponent } from './CustomComponent/syncfusion-data-grid/syncfusion-data-grid.formio';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formio-custom-component';
  constructor(injector: Injector) {
    registerRatingComponent(injector);
    registerSyncfusionGridComponent(injector);
  }
}
