import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-chariot',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-chariot.component.css']
})
export class PieceChariotComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '車';

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

    //chariot can only move as straight line
    if(xMovement === 0 || yMovement === 0) {
      //validate line blocking
      return validateBlocking(boardCoordinate, [currentX, currentY], [xMovement, yMovement]);
    }

    return false;

    function validateBlocking(boardCoordinate, startPointCoord, movementCoord) {
      //get the vertical straight line
      if(movementCoord[0] === 0) {
        var yRange = [startPointCoord[1], startPointCoord[1] + movementCoord[1]];

        //check if there is any tile in the line range contains piece
        return !boardCoordinate.filter((tile) => {
          return tile.coordinate[0] === startPointCoord[0] && tile.coordinate[1] > Math.min(...yRange) && tile.coordinate[1] < Math.max(...yRange) && tile.piece;
        }).length;
      }
      //get the horizontal straight line
      else {
        var xRange = [startPointCoord[0], startPointCoord[0] + movementCoord[0]];

        //check if there is any tile in the line range contains piece
        return !boardCoordinate.filter((tile) => {
          return tile.coordinate[1] === startPointCoord[1] && tile.coordinate[0] > Math.min(...xRange) && tile.coordinate[0] < Math.max(...xRange) && tile.piece;
        }).length;
      }
    }
  }
}
