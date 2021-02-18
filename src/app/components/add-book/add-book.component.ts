import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookRecord } from 'src/app/models/BookRecord';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input() book: BookRecord;
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }

  onSubmit() {
    this.addBook.emit(this.book);
  }
}
