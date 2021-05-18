import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePacientComponent } from './delete-pacient.component';

describe('DeletePacientComponent', () => {
  let component: DeletePacientComponent;
  let fixture: ComponentFixture<DeletePacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
