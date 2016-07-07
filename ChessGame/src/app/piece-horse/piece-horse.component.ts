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

  validateMove(coord) {
    var currentX = this.coordinate[0];
    var currentY = this.coordinate[1];
    var targetX = coord[0];
    var targetY = coord[1];

    var xMovement = targetX - currentX;
    var yMovement = targetY - currentY;

    if(Math.pow(xMovement, 2) + Math.pow(yMovement, 2) === 5) {
      //TODO: will add validation for jump blocking
      return true;
    }

    return false;

    function validateBlocking(boardCoordinate, startPointCoord, movementCoord) {
      
    }
  }

}
