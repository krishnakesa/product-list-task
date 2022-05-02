import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ItemDetailComponent }
        ])
    ],
    declarations: [ItemDetailComponent]
})
export class ItemDetailModule {
}
