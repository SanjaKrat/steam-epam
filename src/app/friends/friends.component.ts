import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users/users.service';
import { CurrentUserService } from '../services/current-user/current-user.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: User[] = [];
  users: User[] = [];
  email: string = '';
  currentUser: User = {id: '', username: ''};
  searchText: string = '';

  constructor(private userService: UsersService, 
    private CUS: CurrentUserService,
    private db: AngularFirestore) { }
      

  ngOnInit(): void {
    this.email = this.CUS.getEmail();
    this.userService.getUsers()
        .subscribe(users => {
          this.users = users
          this.getCurrentUser();
          this.getFriends();
        });
    
  }

  getUsers() {
    
  };

  getCurrentUser() {
    
    this.users.forEach(user => {
      if(user.email === this.email) {
        this.currentUser = user;
      }})
  }



  getFriends(): void {
    console.log('getFriends');
    console.log(this.currentUser.friendsIds);
    this.currentUser.friendsIds?.forEach((id:string) => {
      this.users.filter(user => {
        if (user.id === id) {
          if(!this.friends.includes(user)) {
            this.friends.push(user);
          }
        }
      })
    }
  )}

  delete(friendId: string): void {
    let idx = this.currentUser.friendsIds?.indexOf(friendId);
    this.currentUser.friendsIds?.splice(Number(idx), 1);
    console.log('delete');
    console.log(this.currentUser.friendsIds);
    this.db.collection('users')
    .doc(this.currentUser.id)
    .set(this.currentUser, {merge: true})
  }

}
