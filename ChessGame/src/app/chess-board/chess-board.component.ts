import { Component, OnInit } from '@angular/core';
import { PieceMinionComponent } from '../piece-minion/piece-minion.component';
import { PieceCannonComponent } from '../piece-cannon/piece-cannon.component';
import { PieceChariotComponent } from '../piece-chariot/piece-chariot.component';
import { PieceHorseComponent } from '../piece-horse/piece-horse.component';
import { PieceMinisterComponent } from '../piece-minister/piece-minister.component';
import { PieceGuardComponent } from '../piece-guard/piece-guard.component';
import { PieceMarshalComponent } from '../piece-marshal/piece-marshal.component';

@Component({
  moduleId: module.id,
  selector: 'app-chess-board',
  templateUrl: 'chess-board.component.html',
  styleUrls: ['chess-board.component.css'],
  directives: [PieceMinionComponent, PieceCannonComponent, PieceChariotComponent, PieceHorseComponent, PieceMinisterComponent,
    PieceGuardComponent, PieceMarshalComponent]
})
export class ChessBoardComponent implements OnInit {

  private coordinate;

  constructor() {}

  ngOnInit() {
    this.initCoordinate();
  }

  initCoordinate() {
    this.coordinate = {
      black: {
        'minion-1': [0, 3],
        'minion-2': [2, 3],
        'minion-3': [4, 3],
        'minion-4': [6, 3],
        'minion-5': [8, 3],
        'cannon-1': [1, 2],
        'cannon-2': [7, 2],
        'chariot-1': [0, 0],
        'chariot-2': [8, 0],
        'horse-1': [1, 0],
        'horse-2': [7, 0],
        'minister-1': [2, 0],
        'minister-2': [6, 0],
        'guard-1': [3, 0],
        'guard-2': [5, 0],
        'marshal': [4, 0]
      },
      red: {
        'minion-1': [0, 6],
        'minion-2': [2, 6],
        'minion-3': [4, 6],
        'minion-4': [6, 6],
        'minion-5': [8, 6],
        'cannon-1': [1, 7],
        'cannon-2': [7, 7],
        'chariot-1': [0, 9],
        'chariot-2': [8, 9],
        'horse-1': [1, 9],
        'horse-2': [7, 9],
        'minister-1': [2, 9],
        'minister-2': [6, 9],
        'guard-1': [3, 9],
        'guard-2': [5, 9],
        'marshal': [4, 9]
      }
    };
  }
}
