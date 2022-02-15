import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendItemComponent } from './friends/friend-item/friend-item.component';
import { GamesComponent } from './games/games.component';
import { GameCardComponent } from './games/game-card/game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProfileComponent,
    HeaderComponent,
    FriendsComponent,
    FriendItemComponent,
    GamesComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
