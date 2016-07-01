import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-minister',
  templateUrl: 'piece-minister.component.html',
  styleUrls: ['piece-minister.component.css']
})
export class PieceMinisterComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '相';

  constructor() {}

  ngOnInit() {

  }

}
