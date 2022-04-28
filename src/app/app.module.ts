import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { COFFEE_LIST_NAME } from './store/selectors/coffee.selector';
import { CoffeeReducer } from './store/reducers/coffee.reducer';
import { CoffeeEffects } from './store/effects/coffee.effects';

@NgModule({
  declarations: [AppComponent, ProductListComponent, PaginationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'details',
        loadChildren: () =>
          import('./item-detail/item-detail.module').then(
            (mod) => mod.ItemDetailModule
          ),
      },
    ]),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreModule.forRoot({ COFFEE_LIST_NAME: CoffeeReducer }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
