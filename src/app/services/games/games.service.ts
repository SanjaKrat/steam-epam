import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Users } from 'src/app/mock-data/users';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private dbPath = 'games';
  private gamesCollection: AngularFirestoreCollection<Game>;
  games: Observable<Game[]>;

  constructor(private afs: AngularFirestore) {
    this.gamesCollection = afs.collection<any>(this.dbPath);
    this.games = this.gamesCollection.valueChanges();
   }


   getGames() {
     return this.games;
   }
}
