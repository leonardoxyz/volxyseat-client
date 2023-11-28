// payment.component.ts
import { Component } from '@angular/core';
import { SubscriptionService } from 'src/app/services/Subscription.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  planoSelecionado: any;
  username: string | null = null;

  ngOnInit() {
    this.subService.planoSelecionado.subscribe((plano: any) => {
        this.planoSelecionado = plano;
    });
}

  constructor(private subService: SubscriptionService) {
    this.planoSelecionado = this.subService.getPlano();
  }

  checkUserLogin(){
    this.username = localStorage.getItem('username');
  }
}
