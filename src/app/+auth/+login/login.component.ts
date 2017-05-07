import {
  Component,
  OnInit,
} from '@angular/core';

import config from '../../../config';

@Component({
  selector: 'login',
  styleUrls: [
    './login.component.css',
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public config: Object;

  constructor() {
    this.config = config;
  }
}
