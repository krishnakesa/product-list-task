import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { ProductListHomeComponent } from './product-list-home.component';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = { products: {} };

describe('ProductListHomeComponent', () => {
  let component: ProductListHomeComponent;
  let fixture: ComponentFixture<ProductListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductListHomeComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
