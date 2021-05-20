import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminDataComponent } from './view-admin-data.component';

describe('ViewAdminDataComponent', () => {
  let component: ViewAdminDataComponent;
  let fixture: ComponentFixture<ViewAdminDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
