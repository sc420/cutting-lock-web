import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'login',
  styleUrls: [
    './login.component.css',
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Login` component');
  }

}
