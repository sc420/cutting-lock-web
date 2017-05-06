import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './auth.routes';
import { AuthComponent } from './auth.component';

import { NoContentComponent } from '../no-content';

@NgModule({
  declarations: [
    // Components/Directives/Pipes
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {
  public static routes = routes;
}
