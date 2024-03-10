import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormioCustomComponent } from '../../custom-lib/elements.common';

@Component({
  selector: 'app-rating-wrapper',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './rating-wrapper.component.html',
  styleUrl: './rating-wrapper.component.scss'
})
export class RatingWrapperComponent implements FormioCustomComponent<number> {
  @Input()
  value!: number;

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  disabled!: boolean;
}