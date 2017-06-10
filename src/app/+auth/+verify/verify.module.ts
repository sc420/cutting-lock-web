import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './verify.routes';
import { VerifyComponent } from './verify.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    VerifyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class VerifyModule {
  public static routes = routes;
}
