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

  getDetalhesPlano(id: number, header: HttpHeaders): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url, { headers: header });
  }
}
