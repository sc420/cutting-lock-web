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
  selector: 'auth',
  template: `
    <h1>Hello from Auth</h1>
    <span>
      <a [routerLink]=" ['./login'] ">
        Login
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class AuthComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Auth` component');
  }

}
