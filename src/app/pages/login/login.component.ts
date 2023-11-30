import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cookiesAceitos: boolean;

  constructor(private router: Router, private cookieService: CookieService, private loginService: LoginService,) {
    this.cookiesAceitos = this.cookieService.get('aceitou_cookies') === 'true';
  }

  public loginRequest: any = {
    email: '',
    password: '',
  };

  login() {
    this.loginService.post(this.loginRequest).subscribe(
      (response: any) => {
        console.log('Login bem-sucedido!', response);
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.username);
        localStorage.setItem("transactionId", response.transaction);
        localStorage.setItem('email', response.email)
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.log('Erro ao fazer login!', error);
      }
    );
  }
}
