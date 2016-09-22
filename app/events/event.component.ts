import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'em-event',
    templateUrl: 'event.component.html' 
})
export class EventComponent { 

    @Output() onCancel = new EventEmitter();

    cancel() {
        this.onCancel.emit();
    }
}
