import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private dbPath = 'users';
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = afs.collection<any>(this.dbPath);
    this.users = this.usersCollection.valueChanges();
  }

  getUsers() {
    return this.users;
  }
}
