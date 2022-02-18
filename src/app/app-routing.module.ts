import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService} from './services/auth-guard/auth-guard.service';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { 
    path: 'library', 
    component: GamesComponent, 
    canActivate: [AuthGuardService]
  }, 
  { 
    path: 'friends', 
    component: FriendsComponent, 
    canActivate: [AuthGuardService]
  }, 
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: 'signin', 
    component: SignInComponent,
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
