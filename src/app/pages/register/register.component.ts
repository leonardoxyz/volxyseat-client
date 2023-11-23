import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/Register.service';
import { Register } from 'src/app/models/SubscriptionModel/Register';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userId!: string;

  constructor(
    private registerService: RegisterService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  public newRegister: Register = new Register();


  registerAndLogin() {
    this.registerService.post(this.newRegister).subscribe(
      (response: any) => {
        console.log('Temos uma nova empresa registrada!', response);
        this.loginService.post({ email: this.newRegister.email, password: this.newRegister.password }).subscribe(
          (loginResponse: any) => {
            console.log('Login bem-sucedido!', loginResponse);
            this.newRegister = new Register();
            this.router.navigate(['/login']);
          },
          (loginError: any) => {
            console.log('Erro ao fazer login!', loginError);
          }
        );
      }
    )
  }
}