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

  constructor(private afs: AngularFirestore) { }


   getGames() {
      return this.afs
      .collection(this.dbPath)
      .snapshotChanges();
   }

   getLibrary(games: Game[], ids: string[]) {
    let f = [];
    for(let i = 0; i < ids.length; i++) {
      f.push(games.filter(game => game.id === ids[i])[0])
    }
    return f;
   }
}
