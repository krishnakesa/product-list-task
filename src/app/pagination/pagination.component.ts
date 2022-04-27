import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() pageNumbers: number[] = [1, 2, 3, 4, 5];

  @Output() onNextClicked = new EventEmitter();
  @Output() onPreviousClicked = new EventEmitter();
  @Output() onPageClicked = new EventEmitter();

  //constructor() {}

  //ngOnInit(): void {}

  getNext(): void {
    //Emits getNext event
    this.onNextClicked.emit(this.currentPage);
  }

  getPrevious(): void {
    //Emits getPrevious event
    this.onPreviousClicked.emit(this.currentPage);
  }

  getItems(page: number): void {
    //Emits PageClicked event
    this.onPageClicked.emit(page);
  }
}
