import {Injectable} from '@angular/core';
import {EventClient} from "../clients/event.client";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private eventClient: EventClient) {
  }

  public getEvent(): Observable<any> {
    return this.eventClient.getEventSource().pipe(tap(event => console.log('[EventService]: ', event)));
  }
}
