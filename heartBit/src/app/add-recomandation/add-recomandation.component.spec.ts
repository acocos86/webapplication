import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecomandationComponent } from './add-recomandation.component';

describe('AddRecomandationComponent', () => {
  let component: AddRecomandationComponent;
  let fixture: ComponentFixture<AddRecomandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecomandationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecomandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
