import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResetComponent } from './reset/reset.component';
import { InputComponent } from './inputs/input.component';
import { SimpleTextDirective } from './inputs/simpleText.directive';
import { TextIconDirective } from './inputs/textIcon.directive';
import { ButtonStateComponent } from './button/buttonState.component';
import { ButtonToggleDirective } from './button/button-toggle.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ResetComponent, InputComponent, SimpleTextDirective, TextIconDirective, ButtonStateComponent, ButtonToggleDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
