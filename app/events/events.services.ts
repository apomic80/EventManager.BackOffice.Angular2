import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

    baseUrl: string = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/';

    constructor(private http: Http) { }

    getEvents(){
        return this.http.get(this.baseUrl + 'events')
            .map((response: Response) => response.json());
    }
}