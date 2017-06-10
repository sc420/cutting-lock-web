import { AuthComponent } from './auth.component';

export const routes = [
  {
    path: '', children: [
      { path: '', component: AuthComponent },
      { path: 'login', loadChildren: './+login#LoginModule' },
      { path: 'register', loadChildren: './+register#RegisterModule' },
      { path: 'verify', loadChildren: './+verify#VerifyModule' },
      { path: 'profile', loadChildren: './+profile#ProfileModule' },
    ],
  },
];
