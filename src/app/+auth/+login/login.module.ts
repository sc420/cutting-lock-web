import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {
  public static routes = routes;
}
