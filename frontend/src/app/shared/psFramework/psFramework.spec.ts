import * as angular from 'angular';
import 'angular-mocks';
import {psFramework} from './psFramework';

describe('psFramework component', () => {
  beforeEach(() => {
    angular
      .module('psFramework', ['app/shared/psFramework/psFramework.html'])
      .component('psFramework', psFramework);
    angular.mock.module('psFramework');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<psFramework></psFramework>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
