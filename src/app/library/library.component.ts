import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GamesService } from '../services/games/games.service';
import { CurrentUserService } from '../services/current-user/current-user.service';
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
    private currentUserService: CurrentUserService, 
    private userService: UsersService
    ) { }

    ngOnInit(): void {
      this.email = this.currentUserService.getEmail();
      this.gamesService.getGames().subscribe(games => this.games = games);
      this.userService.getUsers()
        .subscribe(users => {
          users.filter(user => {
            if(user.email === this.email) {
              this.currentUser = user;
              
              user.library?.forEach((id:string) => {
                this.games.filter(game => {
                  if (game.id === id) {
                    this.library.push(game);
                  }
                })
              })
            }
          })
        });
    }
}
