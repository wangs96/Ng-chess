import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketServiceService } from "../socket-service/socket-service.service";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public userName: string = '';

  constructor(private router:Router, private socketService: SocketServiceService) {}

  ngOnInit() {
    this.socketService.socket.on('socket.login', (message) => {
      this.router.navigate(['/chess-game']);
      console.log(message);
    });
  }

  playGame() {
    console.log(this.userName);
    this.socketService.userLogin(this.userName);
  }

}
