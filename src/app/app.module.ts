import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { HeaderComponent } from './header/header.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HttpClientModule } from "@angular/common/http";
import { ModalComponent } from './modal/modal.component';
import { NotifyComponent } from './notify/notify.component';
@NgModule({
  declarations: [
    AppComponent,
    ScreenOneComponent,
    SecondScreenComponent,
    HeaderComponent,
    HomeScreenComponent,
    ModalComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
