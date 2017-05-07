import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './register.routes';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RegisterModule {
  public static routes = routes;
}
