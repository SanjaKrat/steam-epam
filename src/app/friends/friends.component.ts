import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users/users.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: User[] = [];
  users: User[] = [];
  email: string = '';
  currentUser: any;
  searchText: string = '';

  constructor(private userService: UsersService, 
    
    private db: AngularFirestore) {
    }
    
    
    ngOnInit(): void {
      this.email = this.userService.getEmail();
      this.userService.getUserList().subscribe(res => {
        this.users = res.map(u => {
          return u.payload.doc.data() as User;
        })
      this.currentUser = this.users.filter((user: User) => user.email === this.email)[0]
      this.getFriends(this.currentUser.friendsIds)
    })

  }

  getFriends(ids: string[]): void {
    let f = [];
    for(let i = 0; i < ids.length; i++) {
      f.push(this.users.filter(user => user.id === ids[i])[0])
    }
    localStorage.setItem('friends', JSON.stringify(f));
    this.friends = JSON.parse(localStorage.getItem('friends') || '[]');
  }

  delete(friendId: string): void {
    let idx = this.currentUser.friendsIds?.indexOf(friendId);
    this.currentUser.friendsIds?.splice(Number(idx), 1);
    this.userService.updateUser(this.currentUser, this.currentUser.id);
  }

}
