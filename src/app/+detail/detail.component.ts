import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <span>
      <a [routerLink]=" ['./child-detail'] ">
        Child Detail
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      console.log(params['token']);
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
