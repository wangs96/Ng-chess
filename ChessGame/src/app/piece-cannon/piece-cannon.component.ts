import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-cannon',
  templateUrl: 'piece-cannon.component.html',
  styleUrls: ['piece-cannon.component.css']
})
export class PieceCannonComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '炮';

  constructor() {}

  ngOnInit() {

  }

}
