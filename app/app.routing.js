"use strict";
var router_1 = require('@angular/router');
var events_component_1 = require('./events/events.component');
var speakers_component_1 = require('./speakers/speakers.component');
var appRoutes = [
    {
        path: 'events',
        component: events_component_1.EventsComponent
    },
    {
        path: 'speakers',
        component: speakers_component_1.SpeakersComponent
    },
    {
        path: '',
        component: events_component_1.EventsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
