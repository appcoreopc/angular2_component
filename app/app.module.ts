import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ResetComponent }  from './reset/reset.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ResetComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
