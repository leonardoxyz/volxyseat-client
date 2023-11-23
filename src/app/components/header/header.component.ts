import { Component } from '@angular/core';
import { LogOutService } from 'src/app/services/LogOut.service';

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

  constructor(private logOutService: LogOutService) {
    this.checkUserLogin();
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
      },
      error => {
        console.error('Erro ao fazer logout:', error);
      }
    );
  }
}

