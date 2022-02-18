import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService, 
    // private http: HttpClient
    ) {}

  authToken: any;

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    this.authToken = token;
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  // login(emai: string, password: string) {
  //   return this.http.post<any>(`/users/authenticate`, {emai, password})
  //     .pipe(map(user => {
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       return user;
  //     }))
  // }
}