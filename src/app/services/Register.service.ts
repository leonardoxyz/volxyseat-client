import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/SubscriptionModel/Register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = `${environment.apiUrl}/Authentication/register`;

  constructor(private http: HttpClient) {}

  post(register: Register){
    return this.http.post(`${this.apiUrl}`, register)
  }
}
