import {
  Component,
  OnInit,
} from '@angular/core';

import config from '../../config';

@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
})
export class WatchComponent {
  public config: Object;

  // Line chart
  public lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: any[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor() {
    this.config = config;
  }
}
