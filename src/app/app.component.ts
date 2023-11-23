import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookiesAceitos: boolean = false;
  title = 'volxyseat.front';

  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit() {
    this.cookiesAceitos = this.cookieService.get('aceitou_cookies') === 'true';
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
