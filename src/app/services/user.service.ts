import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string = 'http://10.99.30.175:5000/api/users';

  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  } 
}