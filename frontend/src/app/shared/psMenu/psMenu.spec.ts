import * as angular from 'angular';
import 'angular-mocks';
import {psMenu} from './psMenu';

describe('psMenu component', () => {
  beforeEach(() => {
    angular
      .module('psMenu', ['app/shared/psMenu/psMenu.html'])
      .component('psMenu', psMenu);
    angular.mock.module('psMenu');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<psMenu></psMenu>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
