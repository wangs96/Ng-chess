import { Component, OnInit } from '@angular/core';
import { ChessBoardComponent } from "../chess-board/chess-board.component";

@Component({
  moduleId: module.id,
  selector: 'app-game-center',
  templateUrl: 'game-center.component.html',
  styleUrls: ['game-center.component.css'],
  directives: [ChessBoardComponent]
})
export class GameCenterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
