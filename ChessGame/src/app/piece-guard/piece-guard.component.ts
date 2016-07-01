import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-guard',
  templateUrl: 'piece-guard.component.html',
  styleUrls: ['piece-guard.component.css']
})
export class PieceGuardComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '士';

  constructor() {}

  ngOnInit() {

  }

}
