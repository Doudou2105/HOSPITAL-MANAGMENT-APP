import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitOfPatientComponent } from './lit-of-patient.component';

describe('LitOfPatientComponent', () => {
  let component: LitOfPatientComponent;
  let fixture: ComponentFixture<LitOfPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitOfPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitOfPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
