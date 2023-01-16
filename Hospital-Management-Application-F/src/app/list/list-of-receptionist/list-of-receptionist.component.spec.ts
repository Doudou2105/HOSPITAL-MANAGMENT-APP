import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfReceptionistComponent } from './list-of-receptionist.component';

describe('ListOfReceptionistComponent', () => {
  let component: ListOfReceptionistComponent;
  let fixture: ComponentFixture<ListOfReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
