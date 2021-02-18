import { Component, Input, OnInit } from '@angular/core';
import { BookRecordService } from '../../services/book-record.service';
import { BookRecord } from '../../models/BookRecord';
import { Challenge } from '../../models/Challenge'
import { User } from '../../models/User'

@Component({
  selector: 'app-book-record',
  templateUrl: './book-record.component.html',
  styleUrls: ['./book-record.component.css']
})
export class BookRecordComponent implements OnInit {
  @Input() challenge: Challenge; 
  @Input() user: User; 
  
  selectedBook: BookRecord; 
  bookRecords:BookRecord[];
  constructor(private bookRecordService:BookRecordService) { }
  showEditor:boolean = false;
  createNewBook:boolean = false;

  ngOnInit(): void {
    this.bookRecordService.getBookRecords(this.user).subscribe(bookRecords =>{
      this.bookRecords = bookRecords;
      console.log(this.bookRecords);
    } );
  }

  onEdit(book:BookRecord, exists:boolean) {
    if(exists) {
      this.selectedBook = book;
      this.createNewBook = false;
    } else {
      this.selectedBook = new BookRecord();
      this.createNewBook = true;
    } 
    this.showEditor = true;
  }

  addBook(newBook: BookRecord){
    if(this.createNewBook) {
      console.log('new book: ', newBook.bookName);
      newBook.reader=this.user;
      newBook.taskId=this.challenge;

      this.bookRecords.push(newBook);
      this.bookRecordService.addBookRecord(newBook);
    }
    this.showEditor = false;
    this.ngOnInit();  // need to refresh component to avoid duplicate buttons
  } 
}
