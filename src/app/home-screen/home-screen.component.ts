import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

@Injectable({
  providedIn: "root"
})

export class HomeScreenComponent implements OnInit {

  first_screen: boolean = false;
  second_screen: boolean = false;
  modal: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.first_screen = !this.first_screen;
  }

}
