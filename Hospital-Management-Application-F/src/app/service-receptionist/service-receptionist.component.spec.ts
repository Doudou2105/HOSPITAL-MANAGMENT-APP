import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReceptionistComponent } from './service-receptionist.component';

describe('ServiceReceptionistComponent', () => {
  let component: ServiceReceptionistComponent;
  let fixture: ComponentFixture<ServiceReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
