import { Component } from '@angular/core';
import { Event } from './event.model';
import { EventsService } from './events.services';

@Component({
    moduleId: module.id,
    selector: 'em-events',
    templateUrl: 'events.component.html',
    providers: [EventsService]
})
export class EventsComponent {

    eventList: Event[];
    currentEvent: Event;
    formVisible: boolean;
    errorMessage : string;

    constructor(private service: EventsService) {
       /* this.eventList = [
            { id: 1, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' },
            { id: 2, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' }
        ];*/
        this.currentEvent =  new Event();
        this.loadEvents();
        this.hideForm();
    }

    hideForm() {
        this.formVisible = false;
        this.loadEvents();
    }

    showForm() {
        this.formVisible = true;
    }

    createEvent(){
        this.errorMessage = undefined;
        this.currentEvent = new Event();
        this.showForm();
    }

    editEvent(event: Event) {
        this.errorMessage = undefined;
        this.currentEvent = event;
        this.showForm(); 
    }

    deleteEvent(event: Event) {
        this.errorMessage = undefined;
        this.service.deleteEvent(event.id)
            .subscribe(
                arg => this.loadEvents(),
                error => this.errorMessage = error);
    }

    loadEvents() {
        console.log('loadEvents called');
        this.service.getEvents()
            .subscribe(arg => this.eventList = arg);
    }

}