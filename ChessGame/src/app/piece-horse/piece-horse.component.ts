import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-piece-horse',
  templateUrl: 'piece-horse.component.html',
  styleUrls: ['piece-horse.component.css']
})
export class PieceHorseComponent implements OnInit {

  @Input()
  coordinate;

  content:string = '馬';

  constructor() {}

  ngOnInit() {

  }

}
