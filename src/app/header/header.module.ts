import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
