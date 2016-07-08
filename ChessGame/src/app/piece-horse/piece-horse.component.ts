import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-horse',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-horse.component.css']
})
export class PieceHorseComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '馬';

  constructor() {}

  ngOnInit() {

  }

  setCoordinate(coordinate) {
    this.coordinate = coordinate;
  }

  setRole(role) {
    this.role = role;
  }

  validateMove(coord, boardCoordinate) {
    var currentX = this.coordinate[0];
    var currentY = this.coordinate[1];
    var targetX = coord[0];
    var targetY = coord[1];

    var xMovement = targetX - currentX;
    var yMovement = targetY - currentY;

    //horse can only move at rectangle diagonal corner
    if(Math.pow(xMovement, 2) + Math.pow(yMovement, 2) === 5) {
      return validateBlocking(boardCoordinate, [currentX, currentY], [xMovement, yMovement]);
    }

    return false;

    function validateBlocking(boardCoordinate, startPointCoord, movementCoord) {
      var blockingTileCoordinate = [];

      //if there is a piece at the horse foot, it will block horse from moving
      if(Math.abs(movementCoord[0]) > Math.abs(movementCoord[1])) {
        blockingTileCoordinate = [startPointCoord[0] + movementCoord[0] / 2, startPointCoord[1]];
      }
      else {
        blockingTileCoordinate = [startPointCoord[0], startPointCoord[1] + movementCoord[1] / 2]
      }

      return !boardCoordinate.filter((tile) => {
        return tile.coordinate[0] === blockingTileCoordinate[0] && tile.coordinate[1] === blockingTileCoordinate[1] && tile.piece
      }).length;
    }
  }

}
