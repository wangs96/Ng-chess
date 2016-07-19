import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  public userName: string = '';

  constructor(private router:Router) {}

  ngOnInit() {
  }

  playGame() {
    console.log(this.userName);
    this.router.navigate(['/chess-game']);
  }

}
