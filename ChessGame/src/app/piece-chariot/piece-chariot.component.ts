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

  validateMove() {
    return true;
  }
}
