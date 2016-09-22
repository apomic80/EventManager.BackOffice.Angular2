import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MenuComponent, EventsComponent, EventComponent ],
  bootstrap: [ AppComponent]
})
export class AppModule { }