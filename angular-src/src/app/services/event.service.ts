import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EventService {

  constructor(private http: Http) { }
  getEvents() {
    return this.http.get("api/events")
    .map(res => res.json());
  }



}
