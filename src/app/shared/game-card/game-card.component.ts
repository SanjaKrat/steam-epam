import { Component, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game;
  @Input() inLibrary: boolean = false;
  @Input() noItems: boolean = false;

  constructor() {
    this.game = {
      name: '', 
      id: '',
      description: '',
      price: 0,
      coverURL: ''
    }
   }

  ngOnInit(): void {
  }

}
