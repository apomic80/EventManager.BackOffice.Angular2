import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Event } from './event.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EventsService {

    apiUrl: string = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';

    constructor(private http: Http) { }

    getEvents(){
        return this.http.get(this.apiUrl/* + '?t=' + Math.random()*/)
            .map((response: Response) => response.json())
    }

    createEvent(event: Event) {
        let data = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateEvent(event: Event) {
        let data = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.apiUrl + '/' + event.id, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteEvent(eventId: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.apiUrl + '/' + eventId, options)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any) : any {
        console.log(error);
        let errMsg: string =  error.status ? error.status + '-' + error.statusText : 'Server error';
        throw(errMsg);
    }
}