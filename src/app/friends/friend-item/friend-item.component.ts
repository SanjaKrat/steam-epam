import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  @Input() friend: User = {id: '', username: ''};
  @Input() currentUser: User = {id: '', username: ''};

  constructor() { }

  ngOnInit(): void {
  }

  
}
