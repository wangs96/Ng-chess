import { provideRouter, RouterConfig } from '@angular/router';
import { GameCenterComponent } from "./game-center/game-center.component";
import { HomeComponent } from "./home/home.component";

const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  { path: 'chess-game', component: GameCenterComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
