import { WatchComponent } from './watch.component';

export const routes = [
  {
    path: '', children: [
      { path: '', component: WatchComponent },
    ],
  },
];
