import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  JsonpModule,
} from '@angular/http';
import {
  NgModule,
  ApplicationRef,
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer,
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

/* Vendors */
import { CarouselModule } from 'ngx-bootstrap/carousel';

/* User-defined services */
import { AuthService } from './service/auth.service';
import { HistoryService } from './service/history.service';
import { WebSocketService } from './service/web-socket.service';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective,
  ],
  imports: [
    // Import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    CarouselModule.forRoot(),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    // User-defined services
    AuthService,
    HistoryService,
    WebSocketService,
  ],
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState,
  ) { }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
