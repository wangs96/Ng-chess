import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-guard',
  templateUrl: '../shared/pieceTemplate.html',
  styleUrls: ['../shared/pieceStyle.css', 'piece-guard.component.css']
})
export class PieceGuardComponent implements OnInit {

  public coordinate = [];
  public role: string;
  public selected: boolean = false;
  public destroyed: boolean = false;

  content:string = '士';

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
