import {
  Component,
  OnInit,
} from '@angular/core';

import { WebSocketService } from '../service/web-socket.service';

@Component({
  selector: 'watch',
  styleUrls: [
    './watch.component.css',
  ],
  templateUrl: './watch.component.html',
})
export class WatchComponent {
  // Watch log
  public watchLog: Object[] = [];
  public lastAuthorized: number = 0;
  public lastAccessDenied: number = 0;
  public lastSimilarity: number = 0;

  // Line chart
  public lineChartData1: any[] = [
    { data: [], label: 'Authorized' },
    { data: [], label: 'Access Denied' },
  ];
  public lineChartData2: any[] = [
    { data: [], label: 'Similarity' },
  ];
  public lineChartLabels: any[] = [];
  public lineChartOptions1: any = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          steps: 1,
          stepValue: 1,
          max: 1,
        },
      }],
    },
  };
  public lineChartOptions2: any = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 10,
          max: 100,
        },
      }],
    },
  };
  public lineChartColors1: any[] = [
    {
      backgroundColor: 'rgba(32, 13, 242, 0.9)',
      borderColor: 'rgba(255,255,255,0)',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      backgroundColor: 'rgba(242, 13, 13, 0.9)',
      borderColor: 'rgba(255,255,255,0)',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartColors2: any[] = [
    {
      backgroundColor: 'rgba(242, 170, 13, 0.5)',
      borderColor: 'rgba(242, 170, 13, 0.9)',
      pointBackgroundColor: 'rgba(121, 85, 6, 0.9)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend: boolean[] = [true, true];
  public lineChartType: string[] = ['bar', 'line'];
  // Dynamic settings
  private tickCount: number = 30;

  constructor(
    private webSocketService: WebSocketService,
  ) {
    const reader = new FileReader();
    // File reader to convert blob to string
    reader.addEventListener('loadend', (e: any) => {
      const text = e.srcElement.result;
      const data = JSON.parse(text);
      this.watchLog.unshift(data);
      // Show the notification
      let notificationOptions = {
        body: '',
        icon: 'https://cuttinglock.com/assets/icon/lock-red.png',
      };
      if (data.user) {
        notificationOptions.body = `User ${data.user} is authorized`;
      } else {
        notificationOptions.body = `An unknown stranger is trying to break your door!`;
      }
      this.showNotification(notificationOptions);
      // Set the last log for chart to read
      this.lastAuthorized = (data.user !== '' ? 1 : 0);
      this.lastAccessDenied = (data.user === '' ? 1 : 0);
      this.lastSimilarity = data.similarity;
    });
    // Watch the activities by web socket
    this.webSocketService.getWatch()
      .subscribe(
      (msg: any) => {
        reader.readAsText(msg.data);
      },
      (msg) => {
        console.log('error', msg);
      },
      () => {
        console.log('complete');
      });
    // Initialize chart
    this.initChart();
  }

  public initChart() {
    this.lineChartLabels = [];
    this.lineChartData1[0].data = [];
    this.lineChartData1[1].data = [];
    this.lineChartData2[0].data = [];
    for (let i = 0; i < this.tickCount; i += 1) {
      if (i % 10 === 0) {
        this.lineChartLabels.push(i.toString());
      } else {
        this.lineChartLabels.push('');
      }
      // Push default values
      this.lineChartData1[0].data.push(0);
      this.lineChartData1[1].data.push(0);
      this.lineChartData2[0].data.push(0);
    }

    setInterval(() => {
      this.updateChartData(this.lineChartData1[0], this.lastAuthorized);
      this.updateChartData(this.lineChartData1[1], this.lastAccessDenied);
      this.updateChartData(this.lineChartData2[0], this.lastSimilarity);
      // Clear the data of the last time
      this.lastAuthorized = 0;
      this.lastAccessDenied = 0;
      // Update the chart
      this.lineChartData1 = this.lineChartData1.slice();
      this.lineChartData2 = this.lineChartData2.slice();
    }, 1000);
  }

  public updateChartData(data, newValue) {
    const oldSize = data.data.length;
    if (oldSize >= this.tickCount) {
      data.data.shift();
    }
    data.data.push(newValue);
  }

  public getUsername(watch: any): string {
    if (watch.user) {
      return watch.user;
    } else {
      return 'Unknown Stranger';
    }
  }

  public getImageSrc(watch: any): string {
    const src = `https://s3.amazonaws.com/${watch.bucket}/${watch.request}`;
    return src;
  }

  public getDate(watch: any): string {
    const date = new Date(watch.date);
    return date.toLocaleString();
  }

  public showNotification(options: any) {
    const notification = window['Notification'];
    if (notification.permission === 'granted') {
      this.showNotificationCreate(options);
    } else if (notification.permission !== 'denied') {
      notification.requestPermission((permission) => {
        if (permission === 'granted') {
          this.showNotificationCreate(options);
        }
      });
    }
  }

  public showNotificationCreate(options: any) {
    const notification = new Notification('Cutting Lock Alert', options);
    notification.onclick = (event) => {
      window.focus();
      notification.close();
    };
    setTimeout(() => {
      notification.close();
    }, 5000);
  }
}
