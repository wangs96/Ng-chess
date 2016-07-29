import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class SocketServiceService {

  public socket = io();

  constructor() {

  }

  userLogin(userName) {
    this.socket.emit('socket.userJoin', {
      userName: userName
    });
  }

  initSocket() {

  }

}
