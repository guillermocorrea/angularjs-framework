import * as angular from 'angular';
import 'angular-mocks';
import {AppComponent} from './app.component';

describe('appComponent component', () => {
  beforeEach(() => {
    angular
      .module('appComponent', ['app/app.component.html'])
      .component('appComponent', new AppComponent());
    angular.mock.module('appComponent');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<appComponent></appComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
