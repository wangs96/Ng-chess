import { Component, OnInit } from '@angular/core';
import { ChessBoardComponent } from './chess-board/chess-board.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ChessBoardComponent]
})

export class AppComponent implements OnInit {

  //Block select element from mouse moving
  init() {
    window.addEventListener('mousemove', function(event) {
      event.preventDefault();
    });
  }

  ngOnInit() {
    this.init();
  }
}
