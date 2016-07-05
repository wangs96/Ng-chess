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

}
