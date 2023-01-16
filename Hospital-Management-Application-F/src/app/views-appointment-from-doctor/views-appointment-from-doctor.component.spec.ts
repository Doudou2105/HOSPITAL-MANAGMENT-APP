import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAppointmentFromDoctorComponent } from './views-appointment-from-doctor.component';

describe('ViewsAppointmentFromDoctorComponent', () => {
  let component: ViewsAppointmentFromDoctorComponent;
  let fixture: ComponentFixture<ViewsAppointmentFromDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsAppointmentFromDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsAppointmentFromDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
