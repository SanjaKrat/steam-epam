import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GamesService } from '../services/games/games.service';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  searchText = '';
  currentUser: any;
  libraryIds: string[] = [];
  email: string = '';

  constructor(
    private gamesService: GamesService, 
    private userService: UsersService) { }

  ngOnInit(): void {
    this.getGames();
    this.email = this.userService.getEmail();
    this.userService.getUserList().subscribe(res => {
      let users = res.map(u => {
        return u.payload.doc.data();
      })
      this.currentUser = users.filter((user: any) => user.email === this.email)[0]
      this.libraryIds = this.currentUser.library;   
    })
  }

  getGames(): void {
    this.gamesService.getGames().subscribe(res => {
      this.games = res.map(u => {
        return u.payload.doc.data() as Game;
      })
    })
  }
}
