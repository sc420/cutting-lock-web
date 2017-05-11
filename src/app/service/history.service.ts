import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import config from '../../config';

@Injectable()
export class HistoryService {
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = config.getServerUri();
  }

  public getHistory = (identity: string): Observable<Event[]> => {
    return this.http
      .get(`${this.baseUrl}/v1/history/${identity}`)
      .map((res: Response) => res.json())
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
