import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  @Input() user: User;

  constructor() {
    this.user = {
      id: 0, 
      nick: 'anon', 
      age: 0,
      friendsIds: [],
      password: '',
      email: ''
    }
   }

  ngOnInit(): void {
  }
}
