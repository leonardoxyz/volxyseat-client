import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Transaction } from '../models/SubscriptionModel/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  apiUrl = `${environment.apiUrl}/Transaction`;

  constructor(private http: HttpClient) { }

  post(transaction: Transaction){
    return this.http.post(`${this.apiUrl}`, transaction)
  }

  getById(id: any){
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
