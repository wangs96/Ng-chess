import { Component, OnInit, ViewChildren } from '@angular/core';
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

  @ViewChildren(PieceMinionComponent)
  private minionComponents;

  @ViewChildren(PieceCannonComponent)
  private cannonComponents;

  @ViewChildren(PieceChariotComponent)
  private chariotComponents;

  @ViewChildren(PieceHorseComponent)
  private horseComponents;

  @ViewChildren(PieceMinisterComponent)
  private ministerComponents;

  @ViewChildren(PieceGuardComponent)
  private guardComponents;

  @ViewChildren(PieceMarshalComponent)
  private marshalComponents;

  public coordinate = [];

  constructor() {}

  ngOnInit() {
    this.initBoardCoordinate();
  }

  ngAfterViewInit() {
    this.initPieceCoordinate();
  }

  initPieceCoordinate() {
    this.setPieceInfo(this.minionComponents.toArray(), 5, (index, roleFlag) => {
      return roleFlag?[index * 2, 3]: [index * 2, 6];
    });

    this.setPieceInfo(this.cannonComponents.toArray(), 2, (index, roleFlag) => {
      return roleFlag?[index * 6 + 1, 2]: [index * 6 + 1, 7];
    });

    this.setPieceInfo(this.chariotComponents.toArray(), 2, (index, roleFlag) => {
      return roleFlag?[index * 8, 0]: [index * 8, 9];
    });

    this.setPieceInfo(this.horseComponents.toArray(), 2, (index, roleFlag) => {
      return roleFlag?[index * 6 + 1, 0]: [index * 6 + 1, 9];
    });

    this.setPieceInfo(this.ministerComponents.toArray(), 2, (index, roleFlag) => {
      return roleFlag?[index * 4 + 2, 0]: [index * 4 + 2, 9];
    });

    this.setPieceInfo(this.guardComponents.toArray(), 2, (index, roleFlag) => {
      return roleFlag?[index * 2 + 3, 0]: [index * 2 + 3, 9];
    });
    this.setPieceInfo(this.marshalComponents.toArray(), 1, (index, roleFlag) => {
      return roleFlag?[index + 4, 0]: [index + 4, 9];
    });
  }

  initBoardCoordinate() {
    this.coordinate = generateCoordinate();

    function generateCoordinate() {
      var coordinate = [];
      for(var i = 0; i < 10; i++) {
        for(var l = 0; l < 9; l++) {
          coordinate.push({
            id: '' + l + i,
            coordinate: [l, i],
            piece: null
          });
        }
      }
      return coordinate;
    }
  }

  setPieceInfo(pieces, breakIndex, coordinateFunc) {
    pieces.forEach((piece, index) => {
      var boardCoord;
      if(index < breakIndex) {
        piece.setRole('black');
        piece.setCoordinate(coordinateFunc(index, true));
        boardCoord = this.getCoordInfo(coordinateFunc(index, true));
      }
      else {
        piece.setRole('red');
        piece.setCoordinate(coordinateFunc(index - breakIndex, false));
        boardCoord = this.getCoordInfo(coordinateFunc(index - breakIndex, false));
      }

      boardCoord.piece = piece;
    });
  }

  getCoordInfo(coordinate) {
    var coordObj = {};
    var coordObjId = '' + coordinate[0] + coordinate[1];

    this.coordinate.forEach((coord) => {
      if(coord.id === coordObjId) {
        coordObj = coord;
      }
    });

    return coordObj;
  }
}
