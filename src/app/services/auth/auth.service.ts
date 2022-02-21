import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  authToken: any;

  constructor(public auth: AngularFireAuth, private router: Router) {
      this.userData = auth.authState;
    }


  isAuthenticated(): boolean {
    this.authToken = localStorage.getItem('currentUser');
    console.log(this.authToken ? true : false);
    
    return this.authToken ? true : false;
  }

  login(email: string, password: string): any {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(responce => {
        this.userData = responce.user;
        localStorage.setItem('currentUser', JSON.stringify(this.userData));
        this.auth.onAuthStateChanged(() => this.router.navigate(['library']))
      }).catch(err => {
        return err;
      })
  }

  logout() {
    this.auth.signOut();
    localStorage.removeItem('curentUser');
  }
}