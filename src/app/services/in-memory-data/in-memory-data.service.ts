
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Games } from "src/app/mock-data/games";
import { Users } from "src/app/mock-data/users";
import { Game } from "src/app/models/game";
import { User } from "src/app/models/user";


export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const games: Game[] = Games;
    const friends: User[] = Users;
    
    return {games, friends};
  }
}
