import {
  Component,
  OnInit,
} from '@angular/core';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'profile',
  styleUrls: [
    './profile.component.css',
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  public profile: Object = {
    cognitoId: null,
    username: null,
  };
  public errorMessage: string;

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit() {
    this.authService.getProfile()
      .subscribe(
      (profile) => { this.profile = profile; },
      (error) => { this.errorMessage = <any>error; },
    );
  }
}
