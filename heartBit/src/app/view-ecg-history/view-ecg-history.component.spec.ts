import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEcgHistoryComponent } from './view-ecg-history.component';

describe('ViewEcgHistoryComponent', () => {
  let component: ViewEcgHistoryComponent;
  let fixture: ComponentFixture<ViewEcgHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEcgHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEcgHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
