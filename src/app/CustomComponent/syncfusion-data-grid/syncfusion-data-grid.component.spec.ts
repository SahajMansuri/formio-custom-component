import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionDataGridComponent } from './syncfusion-data-grid.component';

describe('SyncfusionDataGridComponent', () => {
  let component: SyncfusionDataGridComponent;
  let fixture: ComponentFixture<SyncfusionDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncfusionDataGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyncfusionDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
