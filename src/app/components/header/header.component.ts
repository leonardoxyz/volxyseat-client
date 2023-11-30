import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LogOutService } from 'src/app/services/LogOut.service';
import { SubscriptionService } from 'src/app/services/Subscription.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string | null = null;
  isAuthenticated: boolean = false;
  isMenuOpen = false;
  isWideScreen = window.innerWidth > 930;
  teste : string = ""


  constructor(private logOutService: LogOutService, private tranService: TransactionsService, private subService: SubscriptionService,   private router: Router) {
    this.checkUserLogin();
    this.getSubscriptionId();
  }

  checkUserLogin() {
    const token = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
    this.isAuthenticated = !!token;
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.logOutService.logout().subscribe(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.username = null;
        this.isAuthenticated = false;
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erro ao fazer logout:', error);
      }
    );
  }

  getTransaction(): Observable<any> {
    return this.tranService.getById(localStorage.getItem("transactionId"));
  }


  getSubscriptionId() {
    this.getTransaction().pipe(
      switchMap((transaction: any) => {
        console.log(transaction.subscription);
        return this.getSubscriptionById(transaction.subscription);
      })
    ).subscribe(
      (result: any) => {
        this.teste = result.type;
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
}

