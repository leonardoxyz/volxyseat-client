import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookiepopup',
  templateUrl: './cookiepopup.component.html',
  styleUrls: ['./cookiepopup.component.css']
})
export class CookiepopupComponent {
  cookiesAceitos: boolean;

  constructor(private cookieService: CookieService) {
    this.cookiesAceitos = this.cookieService.get('aceitou_cookies_dev') === 'true';
  }

  aceitarCookies() {
    this.cookieService.set('aceitou_cookies', 'true', 1);
    this.cookiesAceitos = true;
  }

  recusarCookies() {
    this.cookieService.set('aceitou_cookies', 'false', 1);
    this.cookiesAceitos = false;
  }
}
