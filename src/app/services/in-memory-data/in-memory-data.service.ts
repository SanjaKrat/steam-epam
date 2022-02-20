
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Games } from "src/app/mock-data/games";
import { Users } from "src/app/mock-data/users";
import { Game } from "src/app/models/game";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const friends: User[] = Users;
    const games: Game[] = Games;
    
    return {
      games, 
      friends
    };
  }

  getCurrentUser(email: string, password: string) {
    const users = Users;
    let currentUser = users.filter(user => user.email === email && user.password === password) || {nick: 'error'};
    let responseStatus = '';
    currentUser.length ? responseStatus = '200' : responseStatus = '404'
    return {
      status: '200',
      id: currentUser[0]?.id,
      nick: currentUser[0]?.nick,
      age: currentUser[0]?.age,
      friendsIds: currentUser[0]?.friendsIds,
    };
  }
}
