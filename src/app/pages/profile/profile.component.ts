import { Component } from '@angular/core';
import { Observable, switchMap, forkJoin } from 'rxjs';
import { SubscriptionService } from 'src/app/services/Subscription.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: string = 'profile';
  acquisitions: string = 'acquisitions';
  transaction: any;
  isActive: boolean | undefined;
  termInDays: number | undefined;
  

  toggleProfile(profile: string) {
    this.profile = profile;
    if (profile === 'acquisitions') {
      this.getTransactionDetails();
    }
  }

  toggleAcquisitions(acquisitions: string) {
    this.acquisitions = acquisitions;
  }

  subscription: string = "";
  username: string | null = null;
  email: string | null = null;
  type: string | null = null;

  ngOnInit() {
    this.getTransaction();
  }

  constructor(private subService: SubscriptionService, private tranService: TransactionsService) { }

  getTransaction() {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');

    this.tranService.getById(localStorage.getItem('transactionId')).pipe(
        switchMap((transaction: any) => {
            return this.getSubscriptionById(transaction.subscription);
        })
    ).subscribe(
        (result: any) => {
            this.subscription = result.type;
            this.isActive = result.isActive;
            this.termInDays = result.termInDays;
            this.type = result.type;
            console.log(result);
        },
        (error) => {
            console.error(error);
        }
    );
}

  getSubscriptionById(id: string): Observable<any> {
    return this.subService.getById(id);
  }

  getTransactionDetails() {
    this.tranService.getById(localStorage.getItem('transactionId')).subscribe(
      (transactionDetails: any) => {
        this.transaction = transactionDetails;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
