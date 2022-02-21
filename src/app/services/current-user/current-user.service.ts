import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { 

  }

  getEmail() {
    return JSON.parse(localStorage.getItem('currentUser') || '')?.email
  }
}
