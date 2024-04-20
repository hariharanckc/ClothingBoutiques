import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIDtrailComponent } from './sidtrail.component';

describe('SIDtrailComponent', () => {
  let component: SIDtrailComponent;
  let fixture: ComponentFixture<SIDtrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIDtrailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SIDtrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
