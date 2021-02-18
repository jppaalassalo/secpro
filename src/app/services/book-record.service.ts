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

  bookRecordUrl:string = 'http://10.99.30.175:5000/api/books?username=';

  constructor(private http:HttpClient) { }

  getBookRecords(user:User):Observable<BookRecord[]> {
    const myurl:string = `${this.bookRecordUrl}${user.userName}`;
    console.log(myurl);
    return this.http.get<BookRecord[]>(myurl);
  } 

  addBookRecord(newBook:BookRecord):Observable<BookRecord[]> {
    console.log('addbook / service');
    return this.http.get<BookRecord[]>(`${this.bookRecordUrl}`);
  } 


}
