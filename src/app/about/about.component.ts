import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HistoryService } from '../service/history.service';

@Component({
  selector: 'about',
  styles: [`
  `],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  public history: Object[];
  public errorMessage: string;

  constructor(
    public route: ActivatedRoute,
    private historyService: HistoryService,
  ) { }

  public ngOnInit() {
    this.historyService.getHistory('1')
      .subscribe(
      (history) => { this.history = history; },
      (error) => { this.errorMessage = <any>error; },
    );
  }
}
