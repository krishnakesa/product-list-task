import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductService, PRODUCT_LIST_API_HOST } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ProductEffects } from './state/products.effects';
import { productReducer } from './state/products.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        EffectsModule.forRoot([ProductEffects]),
        StoreModule.forRoot({ products: productReducer }),
        RouterModule.forRoot([
            {
                path: 'list',
                loadChildren: () => import('./product-list-home/product-list-home.module').then(mod => mod.ProductListHomeModule)
            },
            {
                path: 'details',
                loadChildren: () => import('./item-detail/item-detail.module').then(mod => mod.ItemDetailModule)
            },
            {
                path: '', redirectTo: 'list', pathMatch: 'full'
            },

        ])],
    providers: [
        ProductService,
        { provide: PRODUCT_LIST_API_HOST, useValue: environment.productListAPIHostName }
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
