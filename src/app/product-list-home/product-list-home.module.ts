import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductListHomeComponent } from './product-list-home.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ProductListHomeComponent }
        ])
    ],
    declarations: [ProductListHomeComponent, ProductListComponent, PaginationComponent]
})
export class ProductListHomeModule {
}
