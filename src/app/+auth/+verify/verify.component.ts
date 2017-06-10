import {
  Component,
  OnInit,
} from '@angular/core';

import config from '../../../config';

@Component({
  selector: 'verify',
  styleUrls: [
    './verify.component.css',
  ],
  templateUrl: './verify.component.html',
})
export class VerifyComponent {
  public config: Object;

  constructor() {
    this.config = config;
  }
}
