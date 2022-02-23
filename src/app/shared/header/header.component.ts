import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: Observable<boolean>;
  constructor(public authService: AuthService) { 
    this.isAuth = this.authService.isLoggedIn;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
