import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDoctorComponent } from './service-doctor.component';

describe('ServiceDoctorComponent', () => {
  let component: ServiceDoctorComponent;
  let fixture: ComponentFixture<ServiceDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
