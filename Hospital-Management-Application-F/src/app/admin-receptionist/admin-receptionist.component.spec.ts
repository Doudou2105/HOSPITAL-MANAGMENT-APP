import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReceptionistComponent } from './admin-receptionist.component';

describe('AdminReceptionistComponent', () => {
  let component: AdminReceptionistComponent;
  let fixture: ComponentFixture<AdminReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
