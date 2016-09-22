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

    constructor(private service: EventsService) {
       /* this.eventList = [
            { id: 1, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' },
            { id: 2, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' }
        ];*/

        this.loadPlayers();
    }

    loadPlayers() {
        this.service.getEvents()
            .subscribe(arg => this.eventList = arg);
        
    }

}