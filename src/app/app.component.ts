/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AppState } from './app.service';

import config from '../config';

import { AuthService } from './service/auth.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Cutting Lock';
  public url = 'https://twitter.com/AngularClass';

  public isNavbarCollapsed: boolean = false;

  public baseUrl: string;
  public profile: Object;
  public errorMessage: string;

  constructor(
    public appState: AppState,
    private authService: AuthService,
  ) {
    this.baseUrl = config.getServerUri();
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

    this.authService.getProfile()
      .subscribe(
      (profile) => {
        this.appState.set('profile', profile);
        this.profile = profile;
      },
      (error) => {
        this.profile = null;
        this.errorMessage = <any>error;
      },
    );
  }

  public toggleCollapse(isCollapsed: boolean) {
    if (typeof isCollapsed !== 'undefined') {
      this.isNavbarCollapsed = isCollapsed;
    } else {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
