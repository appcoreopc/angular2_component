import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ResetComponent }  from './reset/reset.component';
import { InputComponent }  from './inputs/input.component';

@NgModule({
  imports:      [ BrowserModule,  FormsModule ],
  declarations: [ AppComponent, ResetComponent, InputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
