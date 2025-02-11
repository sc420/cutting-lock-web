import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import config from '../../config';

@Injectable()
export class WebSocketService {
  private baseUrl: string;
  private ws: $WebSocket;

  constructor(private http: Http) {
    this.baseUrl = config.getWebSocketUri();
    this.ws = new $WebSocket(this.baseUrl);
  }

  public getWatch = (): Observable<Event[]> => {
    return this.ws.getDataStream()
      .catch(this.handleError_);
  }

  private handleError_(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    console.log(error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
