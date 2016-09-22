"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var events_services_1 = require('./events.services');
var EventsComponent = (function () {
    function EventsComponent(service) {
        /* this.eventList = [
             { id: 1, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' },
             { id: 2, name: 'Angular 2 Lab', startDate: '23-09-2016', endDate: '23-09-2016', description: 'Laboratorio su Angular 2', visible: true, location: 'casoria' }
         ];*/
        this.service = service;
        this.loadPlayers();
        this.hideForm();
    }
    EventsComponent.prototype.hideForm = function () {
        this.formVisible = false;
    };
    EventsComponent.prototype.showForm = function () {
        this.formVisible = true;
    };
    EventsComponent.prototype.editEvent = function (event) {
        this.currentEvent = event;
        this.showForm();
    };
    EventsComponent.prototype.loadPlayers = function () {
        var _this = this;
        this.service.getEvents()
            .subscribe(function (arg) { return _this.eventList = arg; });
    };
    EventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'em-events',
            templateUrl: 'events.component.html',
            providers: [events_services_1.EventsService]
        }), 
        __metadata('design:paramtypes', [events_services_1.EventsService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
