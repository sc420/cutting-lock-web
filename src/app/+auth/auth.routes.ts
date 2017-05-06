import { AuthComponent } from './auth.component';

export const routes = [
  {
    path: '', children: [
      { path: '', component: AuthComponent },
      { path: 'login', loadChildren: './+login#LoginModule' },
    ],
  },
];
