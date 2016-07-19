import { Component, OnInit } from '@angular/core';
//import { ChessBoardComponent } from './chess-board/chess-board.component';
import { SocketServiceService } from './socket-service/socket-service.service';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SocketServiceService]
})

export class AppComponent implements OnInit {

  constructor(private socketService: SocketServiceService) {

  }

  //Block select element from mouse moving
  ngOnInit() {
    window.addEventListener('mousemove', function(event) {
      event.preventDefault();
    });
    this.socketService.initSocket();
  }
}
