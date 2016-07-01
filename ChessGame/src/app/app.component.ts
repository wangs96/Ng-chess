import { Component } from '@angular/core';
import { ChessBoardComponent } from './chess-board/chess-board.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ChessBoardComponent]
})

export class AppComponent {

}
