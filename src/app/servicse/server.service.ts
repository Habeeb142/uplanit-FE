import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  data;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(environment.category_url);
  }

  getEvents() {
    return this.http.get<any>(environment.event_url);
  }

  submitData(data) {
    this.data = data;
    return this.data;
  }

  submitAll(){
    let event_ = [];
    let cat_ = [];

    for (let i = 0; i < this.data.selectedEvent.length; i++) {
      event_.push(this.data.selectedEvent[i].id)     
    };
    for (let i = 0; i < this.data.selection.length; i++) {
      cat_.push(this.data.selection[i].id)     
    }

    const b_name = this.data.b_name;
    const b_desc = this.data.b_desc;
    const event = event_.join();
    const category = cat_.join();
    

    return this.http.get<any>(`${environment.be_url}?b_name=${b_name}&b_desc=${b_desc}&events=${event}&categories=${category}`);
    
  }
}
