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

    private _event: Event;

    @Input()
    public get event(): Event {
        return this._event;
    }
    public set event(v: Event) {
        this._event = v;
        if (this._event.startDate != undefined) {
            this._event.startDate = this._event.startDate.substring(0, 10);
        }
        if (this._event.endDate != undefined) {
            this._event.endDate = this._event.endDate.substring(0, 10);
        }
    }

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
