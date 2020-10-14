import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.css']
})
export class ScreenOneComponent implements OnInit {
  b_name_err: boolean = false;
  b_desc_err: boolean = false;

  public details = {
    b_name: null,
    b_desc: null
  }
  constructor() { }

  ngOnInit(): void {
  }

  continue() {
    (!this.details.b_name)? this.b_name_err = true : this.b_name_err = false;
    (!this.details.b_desc)? this.b_desc_err = true : this.b_desc_err = false
  }

  handleKeydown(x) {
    switch (x) {
      case 1:
        this.b_name_err = false;
        break;

      case 2:
        this.b_desc_err = false;
        break;
    
      default:
        break;
    }
  }

}
