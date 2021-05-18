import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorDataComponent } from './view-doctor-data.component';

describe('ViewDoctorDataComponent', () => {
  let component: ViewDoctorDataComponent;
  let fixture: ComponentFixture<ViewDoctorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
