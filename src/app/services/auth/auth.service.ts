import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  authToken: any;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public auth: AngularFireAuth, private router: Router) {
      this.userData = auth.authState;
    }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(email: string, password: string): any {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(responce => {
        this.userData = responce.user;
        localStorage.setItem('currentUser', JSON.stringify(this.userData));
        this.auth.onAuthStateChanged(() => this.router.navigate(['library']))
        this.loggedIn.next(true);
      }).catch(() => {
        this.loggedIn.next(false);
      })
  }

  logout() {
    this.auth.signOut();
    this.loggedIn.next(false);
    localStorage.clear();
  }
}