import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-chariot',
  templateUrl: 'piece-chariot.component.html',
  styleUrls: ['piece-chariot.component.css']
})
export class PieceChariotComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '車';

  constructor() {}

  ngOnInit() {

  }

}
