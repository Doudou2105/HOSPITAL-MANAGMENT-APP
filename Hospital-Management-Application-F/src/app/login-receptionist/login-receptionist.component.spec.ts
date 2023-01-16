import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReceptionistComponent } from './login-receptionist.component';

describe('LoginReceptionistComponent', () => {
  let component: LoginReceptionistComponent;
  let fixture: ComponentFixture<LoginReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
