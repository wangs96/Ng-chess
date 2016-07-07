import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-minister',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-minister.component.css']
})
export class PieceMinisterComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '相';

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

    //minister can only move to square diagonal corner
    if(Math.abs(xMovement) === 2 && Math.abs(yMovement) === 2) {
      //minister can not move over river
      if((this.role === 'red' && targetY > 4) || (this.role === 'black' && targetY < 5)) {
        return true;
      }
    }

    return false;
  }
}
