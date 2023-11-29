// payment.component.ts
import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/SubscriptionModel/Transaction';
import { SubscriptionService } from 'src/app/services/Subscription.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  planoSelecionado: any;
  username: string | null = null;
  transaction: any ;



  ngOnInit() {
    this.subService.planoSelecionado.subscribe((plano: any) => {
        this.planoSelecionado = plano;
        localStorage.setItem("subscriptionId", this.planoSelecionado.id)
        console.log(this.planoSelecionado.id)
    });

    this.transaction = this.tranService.getById(localStorage.getItem("transactionId")).subscribe(
      (response:any) => {
        localStorage.setItem("clientId", response.client)
        return response;
      }
    )


}

  constructor(private subService: SubscriptionService, private tranService: TransactionsService) {
    this.planoSelecionado = this.subService.getPlano();
  }

  checkUserLogin(){
    this.username = localStorage.getItem('username');
  }

  public newTransaction: Transaction = new Transaction();
  public subId = localStorage.getItem("subscriptionId");
  public clientId = localStorage.getItem("clientId")

  insertPayment() {
    if(this.subId !== null && this.clientId !== null){
      this.newTransaction.client = this.clientId;
      this.newTransaction.subscription = this.subId;
      this.newTransaction.termInDays = 123;

      this.tranService.post(this.newTransaction).subscribe(
        (response:any) => {
          console.log(response);
          return response;
        },
        (error: any) => {
          console.log(error)
        }
      )
    }else{
      console.log("Erro")
    }
    
  }
}
