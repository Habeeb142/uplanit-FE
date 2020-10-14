import { Component, OnInit } from '@angular/core';
import { HomeScreenComponent } from '../home-screen/home-screen.component';
import { ServerService } from "../servicse/server.service";

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {
  public data; public selection = [];
  constructor(private server: ServerService, private home: HomeScreenComponent) { }

  ngOnInit(): void {
    this.getCategories();    
  }

  getCategories(): void {
    this.server.getCategories().subscribe(data => this.data = data);
  }

  categoryHandler(position): void {
    this.data[position].index = position;
    this.selection.push(this.data[position]);
    this.data.splice(position, 1);    
  }

  handleCancel(position): void {
    this.data[this.selection[position].index] = this.selection[position];
    this.selection.splice(position, 1);  
  }

  continue(): void {
    if(this.selection.length > 0) {
      this.home.first_screen = false;
      this.home.first_screen = false;
      this.home.modal = true;

      let dat = this.server.data;
      dat.selection = this.selection;
      this.server.submitData(dat);
    }
  }

}
