import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { InMemoryDataService } from '../in-memory-data/in-memory-data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService, 
    private http: HttpClient, 
    private back: InMemoryDataService
    ) {}

  authToken: any;

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    this.authToken = token;
    // return !this.jwtHelper.isTokenExpired(this.authToken);
    return this.authToken ? true : false;
  }

  login(email: string, password: string) {
    let currentUser = this.back.getCurrentUser(email, password);
    if (currentUser.status === '200') {
      localStorage.setItem('currentUser', 'jwt-token');
    }
    return currentUser;
  }
}