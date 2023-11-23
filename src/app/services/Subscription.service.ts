import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from '../models/SubscriptionModel/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  apiUrl = `${environment.apiUrl}/Subscription`;

  constructor(private http: HttpClient) {
    
  }

  getAll(header:HttpHeaders): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.apiUrl, { headers: header });
  }
}
