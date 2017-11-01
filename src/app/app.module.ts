import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C01Component } from './compo1/compo1.component';
import { C02Component } from './compo2/compo2.component';
import { C03Component } from './compo3/compo3.component';
import { C04Component } from './compo4/compo4.component';

@NgModule({
  declarations: [
    AppComponent,
    C01Component,
    C02Component,
    C03Component,
    C04Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
