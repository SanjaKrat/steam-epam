import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game;
  @Input() inLibrary: boolean = false;
  @Input() noItems: boolean = false;
  @Input() inLibraryGamePage: boolean = false;
  current: any;

  constructor(private userService: UsersService) {
    this.game = {
      name: '', 
      id: '',
      description: '',
      price: 0,
      coverURL: ''
    }
    userService.getUserList().subscribe(res => {
      res.map(u => {
        return u.payload.doc.data();
      }).forEach((user: any) => {
        if(user.email === this.userService.getEmail()){
          this.current = user
        }
      });     
    })
   }

  ngOnInit(): void { }

  add(id: string) {
    this.current.library.push(id);
    this.userService.updateUser(this.current, this.current.id);
  }

}
