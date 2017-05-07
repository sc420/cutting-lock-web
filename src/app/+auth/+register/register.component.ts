import {
  Component,
  OnInit,
} from '@angular/core';

import config from '../../../config';

@Component({
  selector: 'register',
  styleUrls: [
    './register.component.css',
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public config: Object;

  constructor() {
    this.config = config;
  }
}
