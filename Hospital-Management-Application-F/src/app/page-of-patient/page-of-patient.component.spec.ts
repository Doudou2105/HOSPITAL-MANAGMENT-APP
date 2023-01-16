import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfPatientComponent } from './page-of-patient.component';

describe('PageOfPatientComponent', () => {
  let component: PageOfPatientComponent;
  let fixture: ComponentFixture<PageOfPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOfPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOfPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
