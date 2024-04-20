import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlikgridComponent } from './slikgrid.component';

describe('SlikgridComponent', () => {
  let component: SlikgridComponent;
  let fixture: ComponentFixture<SlikgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlikgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlikgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
