import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfDoctorComponent } from './page-of-doctor.component';

describe('PageOfDoctorComponent', () => {
  let component: PageOfDoctorComponent;
  let fixture: ComponentFixture<PageOfDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOfDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOfDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
