import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { routes } from './watch.routes';
import { WatchComponent } from './watch.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    WatchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    // Vendors
    ChartsModule,
  ],
})
export class WatchModule {
  public static routes = routes;
}
