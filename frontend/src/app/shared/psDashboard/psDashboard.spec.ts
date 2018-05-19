import * as angular from 'angular';
import 'angular-mocks';
import {psDashboard} from './psDashboard';

describe('psDashboard component', () => {
  beforeEach(() => {
    angular
      .module('psDashboard', ['app/shared/psDashboard/psDashboard.html'])
      .component('psDashboard', psDashboard);
    angular.mock.module('psDashboard');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<psDashboard></psDashboard>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
