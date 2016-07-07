import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-marshal',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-marshal.component.css']
})
export class PieceMarshalComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '帅';

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

    //marshal can only move one tile
    if(Math.abs(xMovement) + Math.abs(yMovement) === 1) {
      //marshal cannot move outside of the headquarter
      if(targetX > 2 && targetX < 6) {
        if((this.role === 'red' && targetY > 6) || (this.role === 'black' && targetY < 3)) {
          return true;
        }
      }
    }

    return false;
  }
}
