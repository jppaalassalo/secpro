import { Component, Input, OnInit } from '@angular/core';
import { BookRecordService } from '../../services/book-record.service';
import { BookRecord } from '../../models/BookRecord';
import { Challenge } from '../../models/Challenge'

@Component({
  selector: 'app-book-record',
  templateUrl: './book-record.component.html',
  styleUrls: ['./book-record.component.css']
})
export class BookRecordComponent implements OnInit {
  @Input() challengeId: number; 

  bookRecords:BookRecord[];
  constructor(private bookRecordService:BookRecordService) { }

  ngOnInit(): void {
    this.bookRecordService.getBookRecords().subscribe(bookRecords =>{
      this.bookRecords = bookRecords;
    } );
  }

}
