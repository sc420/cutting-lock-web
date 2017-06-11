import {
  Component,
  OnInit,
} from '@angular/core';

import config from '../../config';

import { HistoryService } from '../service/history.service';

@Component({
  selector: 'dev',
  templateUrl: './dev.component.html',
})
export class DevComponent implements OnInit {
  public config: Object;

  public history: Object[];
  public date: String;
  public errorMessage: string;

  constructor(private historyService: HistoryService) {
    this.config = config;

    this.date = new Date().toISOString();
  }

  public ngOnInit() {
    this.historyService.getHistory('1')
      .subscribe(
      (history) => { this.history = history; },
      (error) => { this.errorMessage = <any>error; },
    );
  }
}
