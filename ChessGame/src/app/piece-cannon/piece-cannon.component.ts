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

}
