import { Component, OnInit } from '@angular/core';
import { ServerService } from "../servicse/server.service";

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {
  public data; public selection = [];
  constructor(private server: ServerService) { }

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

}
