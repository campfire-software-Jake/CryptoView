import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CoinlistComponent } from './coinlist/coinlist.component';
import { CoinlistModule } from './coinlist/coinlist.module';

const appRoutes: Routes = [
  //  { path: 'Header', component: HeaderComponent },
  //  { path: 'Coinlist', component: CoinlistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoinlistModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
