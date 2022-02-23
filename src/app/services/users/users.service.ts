import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private dbPath = 'users';

  constructor(private afs: AngularFirestore) { }

  getUserDoc(id: string) {
    return this.afs
    .collection(this.dbPath)
    .doc(id)
    .valueChanges();
  }

  getUserList() {
    return this.afs
    .collection(this.dbPath)
    .snapshotChanges();
  }

  updateUser(user: User, id: string) {
    return this.afs
    .collection(this.dbPath)
    .doc(id)
    .update(user)
  }

  getEmail() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}')?.email
  }
}