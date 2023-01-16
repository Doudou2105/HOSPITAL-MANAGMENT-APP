import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfReceptionistComponent } from './page-of-receptionist.component';

describe('PageOfReceptionistComponent', () => {
  let component: PageOfReceptionistComponent;
  let fixture: ComponentFixture<PageOfReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOfReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOfReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
