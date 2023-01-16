import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceptionistComponent } from './view-receptionist.component';

describe('ViewReceptionistComponent', () => {
  let component: ViewReceptionistComponent;
  let fixture: ComponentFixture<ViewReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
