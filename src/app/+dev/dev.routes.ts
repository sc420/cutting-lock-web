import { DevComponent } from './dev.component';

export const routes = [
  {
    path: '', children: [
      { path: '', component: DevComponent },
    ],
  },
];
