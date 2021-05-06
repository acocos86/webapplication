import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPacientComponent } from './view-pacient.component';

describe('ViewPacientComponent', () => {
  let component: ViewPacientComponent;
  let fixture: ComponentFixture<ViewPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
