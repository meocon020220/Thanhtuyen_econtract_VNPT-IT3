import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Hellocomponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

@NgModule({
  declarations: [
    AppComponent,
    Hellocomponent,
    HiComponent ,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
