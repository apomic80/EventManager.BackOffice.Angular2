import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from './event.model';
import { EventsService } from './events.services';

@Component({
    moduleId: module.id,
    selector: 'em-event',
    templateUrl: 'event.component.html',
    providers: [EventsService]
})
export class EventComponent {

    @Input() event: Event;
    @Output() onCancel = new EventEmitter();
    @Output() onSave = new EventEmitter();
    errorMessage: string;

    constructor(private service: EventsService) {
        
    }

    save() {
        if (this.event.id === undefined) {
            console.log('create ' + JSON.stringify(this.event));
            this.service.createEvent(this.event)
                .subscribe(
                    event => { console.log('evento creto:' + JSON.stringify(event)), this.onSave.emit(); },
                    error => this.errorMessage = error);
        }
        else {
            this.service.updateEvent(this.event)
                .subscribe(
                    event => { console.log('evento modificato:' + JSON.stringify(event)), this.onSave.emit(); },
                    error => this.errorMessage = error);
        }
    }

    cancel() {
        this.onCancel.emit();
    }
}
