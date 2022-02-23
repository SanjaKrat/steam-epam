import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GamesService } from '../services/games/games.service';
import { User } from '../models/user';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  games: Game[] = [];
  currentUser: User = {id: '', username: ''};
  email: string = ''
  library: Game[] = [];
  inLibrary = true;
  searchText = '';
  noItems: boolean = false;

  constructor(
    private gamesService: GamesService, 
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    this.email = this.userService.getEmail();
    this.gamesService.getGames().subscribe(res => {
      this.games = res.map(u => {
        return u.payload.doc.data() as Game;
      })
    })
    this.userService.getUserList().subscribe(res => {
      let users = res.map(u => {
        return u.payload.doc.data() as User;
      })
    this.currentUser = users.filter((user: User) => user.email === this.email)[0];
    this.library = this.gamesService.getLibrary(this.games, this.currentUser.library || []);
    })
    
  }
}
