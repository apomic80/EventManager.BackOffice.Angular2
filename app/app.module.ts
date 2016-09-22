import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { DatePipe } from './shared/date.pipe';
import { DatepickerDirective } from './shared/datepicker.directive';

import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, MenuComponent, EventsComponent, EventComponent, SpeakersComponent, DatePipe, DatepickerDirective ],
  bootstrap: [ AppComponent]
})
export class AppModule { }