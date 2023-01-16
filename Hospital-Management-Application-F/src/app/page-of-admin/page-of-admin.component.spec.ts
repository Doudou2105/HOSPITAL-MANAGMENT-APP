import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfAdminComponent } from './page-of-admin.component';

describe('PageOfAdminComponent', () => {
  let component: PageOfAdminComponent;
  let fixture: ComponentFixture<PageOfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOfAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
