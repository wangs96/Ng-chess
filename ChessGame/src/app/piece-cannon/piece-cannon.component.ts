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

  validateMove(coord) {
    var currentX = this.coordinate[0];
    var currentY = this.coordinate[1];
    var targetX = coord[0];
    var targetY = coord[1];

    var xMovement = targetX - currentX;
    var yMovement = targetY - currentY;

    if(xMovement === 0 || yMovement === 0) {
      //TODO: will add blocking check
      return true;
    }
    
    return false;
  }

}
