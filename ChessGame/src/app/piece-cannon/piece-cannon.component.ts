import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-cannon',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-cannon.component.css']
})
export class PieceCannonComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '炮';

  constructor() {}

  ngOnInit() {

  }

  setCoordinate(coordinate) {
    this.coordinate = coordinate;
  }

  setRole(role) {
    this.role = role;
  }

  validateMove(coord, boardCoordinate, attackFlag) {
    var currentX = this.coordinate[0];
    var currentY = this.coordinate[1];
    var targetX = coord[0];
    var targetY = coord[1];

    var xMovement = targetX - currentX;
    var yMovement = targetY - currentY;

    if(xMovement === 0 || yMovement === 0) {
      return validateBlocking(boardCoordinate, [currentX, currentY], [xMovement, yMovement], attackFlag);
    }

    return false;

    function validateBlocking(boardCoordinate, startPointCoord, movementCoord, attackFlag) {
      //get the vertical straight line
      if(movementCoord[0] === 0) {
        var yRange = [startPointCoord[1], startPointCoord[1] + movementCoord[1]];

        //check if there is any tile in the line range contains piece
        let pieces = boardCoordinate.filter((tile) => {
          return tile.coordinate[0] === startPointCoord[0] && tile.coordinate[1] > Math.min(...yRange) && tile.coordinate[1] < Math.max(...yRange) && tile.piece;
        }).length;

        return attackFlag? pieces === 1: pieces === 0;
      }
      //get the horizontal straight line
      else {
        var xRange = [startPointCoord[0], startPointCoord[0] + movementCoord[0]];

        //check if there is any tile in the line range contains piece
        let pieces = boardCoordinate.filter((tile) => {
          return tile.coordinate[1] === startPointCoord[1] && tile.coordinate[0] > Math.min(...xRange) && tile.coordinate[0] < Math.max(...xRange) && tile.piece;
        }).length;

        return attackFlag? pieces === 1: pieces === 0;
      }
    }
  }

}
