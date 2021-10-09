import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class EventClient {

  public getEventSource(): Observable<any> {
    return new Observable<any>(observer => {
      const eventSource = new EventSource(`${environment.apiUrl}/events`, {withCredentials: true});

      eventSource.onmessage = event => {
        observer.next(event);
      }
      eventSource.onerror = err => {
        observer.error(err);
      }
    });
  }
}
