import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-minion',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-minion.component.css']
})
export class PieceMinionComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '卒';

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

    if(this.role === 'red') {
      //minion can only move forward or left right
      if(targetY <= currentY) {
        //if minion has crossed the river
        if(currentY <= 4) {
          //minion can move forward 1 tile or move left right 1 tile
          return ((currentY - targetY) === 1 && currentX === targetX)
            || (Math.abs(currentX - targetX) === 1 && currentY === targetY);
        }
        //if minion not cross river
        else {
          //minion can only move forward 1 tile
          return (currentY - targetY) === 1 && currentX === targetX;
        }
      }
    }
    else {
      //minion can only move forward or left right
      if(targetY >= currentY) {
        //if minion has crossed the river
        if(currentY >= 5) {
          //minion can move forward 1 tile or move left right 1 tile
          return ((targetY - currentY) === 1 && currentX === targetX)
            || (Math.abs(currentX - targetX) === 1 && currentY === targetY);
        }
        //if minion not cross river
        else {
          //minion can only move forward 1 tile
          return (targetY - currentY) === 1 && currentX === targetX;
        }
      }
    }

    return false;
  }

}
