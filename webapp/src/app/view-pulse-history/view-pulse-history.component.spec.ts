import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPulseHistoryComponent } from './view-pulse-history.component';

describe('ViewPulseHistoryComponent', () => {
  let component: ViewPulseHistoryComponent;
  let fixture: ComponentFixture<ViewPulseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPulseHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPulseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
