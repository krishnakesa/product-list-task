import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  getNext(): void {
    //Navigates to next page based on current page
    this.onNextClicked.emit(this.currentPage);
  }

  getPrevious(): void {
    //Navigates to previous page based on current page
    this.onPreviousClicked.emit(this.currentPage);
  }

  getItems(page: number): void {
    //Display 10 items based on current page
    this.onPageClicked.emit(page);
  }
}
