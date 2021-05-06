import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEKGHistoryComponent } from './view-ekghistory.component';

describe('ViewEKGHistoryComponent', () => {
  let component: ViewEKGHistoryComponent;
  let fixture: ComponentFixture<ViewEKGHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEKGHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEKGHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
