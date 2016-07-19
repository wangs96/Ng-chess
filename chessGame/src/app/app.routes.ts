import { provideRouter, RouterConfig } from '@angular/router';
import {ChessBoardComponent} from "./chess-board/chess-board.component";
import {HomeComponent} from "./home/home.component";

const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  { path: 'chess-game', component: ChessBoardComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
