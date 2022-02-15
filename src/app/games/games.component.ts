import { Component, OnInit } from '@angular/core';
import { Games } from '../games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = Games;

  constructor() { }

  ngOnInit(): void {
  }

}
