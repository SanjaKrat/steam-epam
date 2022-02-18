import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game;

  constructor() {
    this.game = {
      name: '', 
      description: '',
      price: 0,
      coverURL: ''
    }
   }

  ngOnInit(): void {
  }

}
