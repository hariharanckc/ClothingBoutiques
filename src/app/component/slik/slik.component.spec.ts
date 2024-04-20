import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlikComponent } from './slik.component';

describe('SlikComponent', () => {
  let component: SlikComponent;
  let fixture: ComponentFixture<SlikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
