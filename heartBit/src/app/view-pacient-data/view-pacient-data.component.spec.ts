import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPacientDataComponent } from './view-pacient-data.component';

describe('ViewPacientDataComponent', () => {
  let component: ViewPacientDataComponent;
  let fixture: ComponentFixture<ViewPacientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPacientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPacientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
