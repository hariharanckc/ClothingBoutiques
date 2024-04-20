import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductregistrationComponent } from './productregistration.component';

describe('ProductregistrationComponent', () => {
  let component: ProductregistrationComponent;
  let fixture: ComponentFixture<ProductregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
