import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecstoreProductsComponent } from './tecstore-products.component';

describe('TecstoreProductsComponent', () => {
  let component: TecstoreProductsComponent;
  let fixture: ComponentFixture<TecstoreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecstoreProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecstoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
