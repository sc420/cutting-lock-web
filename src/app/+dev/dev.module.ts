import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './dev.routes';
import { DevComponent } from './dev.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DevComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DevModule {
  public static routes = routes;
}
