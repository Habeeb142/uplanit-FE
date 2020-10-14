import { Component, OnInit } from '@angular/core';
import { HomeScreenComponent } from '../home-screen/home-screen.component';
import { NotifyComponent } from '../notify/notify.component';
import { ServerService } from '../servicse/server.service';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public data; selectedEvents = [];

  notification_msg: object = { msg: null, success: null };

  constructor(
    private server: ServerService, 
    private home: HomeScreenComponent, 
    public notify: NotifyComponent) { }

  ngOnInit(): void {
    $('#myModal').modal('show');
    this.getEvents()
  }

  getEvents() {
    this.server.getEvents().subscribe(data => this.data = data )
  }

  handleEvent(event) {
    this.selectedEvents.push(event);

    this.data.forEach(element => {
      this.selectedEvents.forEach(selectedEvent => {
          if(element.name == selectedEvent.name) {
            element.checkMe = true;
          }
      });
    });
  }

  close() {
    $('#myModal').modal('hide');
    this.home.second_screen = true;
  }

  handleSubmit() {
    this.notification_msg = { msg: " Please wait, Submission in progress...", success: true };
    this.notify.show();
    let dat = this.server.data
    dat.selectedEvent = this.selectedEvents;
    this.server.submitData(dat);    
    this.submitAll();
  }

  submitAll(){
    this.server.submitAll().subscribe(data=> {
      this.notification_msg = { msg: " Success: Submitted Successfully!", success: true };
      this.notify.show();

      setTimeout(() => {
        this.notify.hide();
        window.location.reload();
      }, 2500);
    })
  }

}
