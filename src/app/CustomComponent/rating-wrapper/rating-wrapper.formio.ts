import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../../custom-lib/elements.common';
import { RatingWrapperComponent } from './rating-wrapper.component';
import { registerCustomFormioComponent } from '../../custom-lib/register-custom-component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'myrating',
  selector: 'my-rating',
  title: 'Rating',
  group: '_custom',
  icon: 'fa fa-star',
};

export function registerRatingComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
}