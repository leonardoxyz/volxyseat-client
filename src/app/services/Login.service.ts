import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/SubscriptionModel/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = `${environment.apiUrl}/Authentication/login`;

  constructor(private http: HttpClient) {}

  post(login: Login){
    return this.http.post(`${this.apiUrl}`, login)
  }
}
