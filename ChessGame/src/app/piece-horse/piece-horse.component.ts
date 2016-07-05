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

}
