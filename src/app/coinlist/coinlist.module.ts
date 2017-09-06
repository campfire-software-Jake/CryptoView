import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Component } from '@angular/core';
import { CoinlistComponent } from './coinlist.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    CoinlistComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  exports: [
    CoinlistComponent
  ],
  providers: [],
  bootstrap: [CoinlistComponent]
})
export class CoinlistModule { } 
 