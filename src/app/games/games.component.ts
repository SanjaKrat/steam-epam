import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GamesService } from '../services/games/games.service';
import { UsersService } from '../services/users/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  range = '';
  max = 0;
  min = 0;
  indie: boolean = false;
  action: boolean = false;
  adventure: boolean = false;

  tagForm = new FormGroup({
    indie: new FormControl(''),
    action: new FormControl(''),
    adventure: new FormControl(''),
  })

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
    this.getPrices();
  }

  getGames(): void {
    this.gamesService.getGames().subscribe(res => {
      this.games = res.map(u => {
        return u.payload.doc.data() as Game;
      })    
    })
  }

  getPrices(): any {
    let games: any[] = []
    let prices: any[] = []
    this.gamesService.getGames().subscribe(res => {
      games = res.map(u => {
        return u.payload.doc.data() as Game;
      })

      games.forEach(g => {
        prices.push(g.price)
      })
      this.min = Math.min(...prices);
      this.max = Math.max(...prices);

    })
    
  }

}
