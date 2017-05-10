import {
  Component,
  OnInit,
} from '@angular/core';

import config from '../../config';

@Component({
  selector: 'barrel',
  templateUrl: './barrel.component.html',
})
export class BarrelComponent {
  public config: Object;

  public date: String;

  constructor() {
    this.config = config;

    this.date = new Date().toISOString();
  }
}
