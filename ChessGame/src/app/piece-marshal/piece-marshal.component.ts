import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-marshal',
  templateUrl: 'piece-marshal.component.html',
  styleUrls: ['piece-marshal.component.css']
})
export class PieceMarshalComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '帅';

  constructor() {}

  ngOnInit() {

  }

}
