import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { BookRecord } from '../models/BookRecord';
import { Challenge } from '../models/Challenge';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookRecordService {

  bookRecordUrl:string = 'http://10.99.30.175:5000/api/books?username=ZP';

  constructor(private http:HttpClient) { }

  getBookRecords():Observable<BookRecord[]> {
    return this.http.get<BookRecord[]>(this.bookRecordUrl);
  } 
}
