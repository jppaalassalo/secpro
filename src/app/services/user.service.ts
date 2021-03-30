import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string = environment.baseUrl+'api/users';

  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  } 
}