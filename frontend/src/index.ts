//require('font-awesome');

import * as angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
import { AppComponent } from './app/app.component';
import { psFrameworkModule } from './app/shared/psFramework/psFramework.module';

export const app: string = 'app';

angular
  .module(app, ['ui.router', psFrameworkModule.name])
  .config(routesConfig)
  .component('app', new AppComponent());
