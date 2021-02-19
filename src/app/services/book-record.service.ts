import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { BookRecord } from '../models/BookRecord';
import { Challenge } from '../models/Challenge';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
} 

@Injectable({
  providedIn: 'root'
})
export class BookRecordService {

  bookRecordUrl:string = 'http://10.99.30.175:5000/api/books';

  constructor(private http:HttpClient) { }

  getBookRecords(user:User):Observable<BookRecord[]> {
    const url:string = `${this.bookRecordUrl}?username=${user.userName}`;
    console.log(url);
    return this.http.get<BookRecord[]>(url);
  } 

  addBookRecord(newBook:BookRecord):Observable<any> {
    const url:string = `${this.bookRecordUrl}`;
    console.log('addbook / service', JSON.stringify(newBook, replacer));
    this.http.post<any>(url, JSON.stringify(newBook, replacer), httpOptions)
    .subscribe(data => {console.log('POST reply:', data)});
    return;
  } 

  updateBookRecord(newBook:BookRecord):Observable<any> {
    const url:string = `${this.bookRecordUrl}/${newBook._id} `;
    console.log('updatebook / service', JSON.stringify(newBook, replacer));
    this.http.put<any>(url, JSON.stringify(newBook, replacer), httpOptions)
    .subscribe(data => {console.log('PUT reply:', data)});
    return;
  }

  deleteBookRecord(book:BookRecord):Observable<BookRecord> {
      const url:string = `${this.bookRecordUrl}/${book._id} `;
      console.log('updatebook / service', JSON.stringify(book, replacer));
      this.http.delete<BookRecord>(url, httpOptions)
      .subscribe(data => {console.log('DELETE reply:', data)});
      return;
  } 



}

function replacer(key, value) {
  // Filtering out properties
  switch(key){
    case 'reader':
      return `${value._id}`;
   case 'challengeId':
      return `${value._id}`;
   default:
   return value;
  }
 }

  