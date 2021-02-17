import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { BookRecord } from '../models/BookRecord';
import { Challenge } from '../models/Challenge';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  challengeUrl:string = 'http://10.99.30.175:5000/api/tasks';

  constructor(private http:HttpClient) { }
  getChallenges():Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.challengeUrl);
  } 
}