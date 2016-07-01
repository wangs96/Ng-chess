import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-minion',
  templateUrl: 'piece-minion.component.html',
  styleUrls: ['piece-minion.component.css']
})
export class PieceMinionComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '卒';

  constructor() {}

  ngOnInit() {

  }

}
