import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FlexLayoutModule,
	HttpModule,
	FormsModule
	
	
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
