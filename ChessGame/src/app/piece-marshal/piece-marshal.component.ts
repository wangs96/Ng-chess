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

  validateMove() {
    return true;
  }
}
