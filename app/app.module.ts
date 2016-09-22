import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MenuComponent, EventsComponent ],
  bootstrap: [ AppComponent]
})
export class AppModule { }