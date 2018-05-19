import angular = require("angular");
import { psMenuModule } from "../psMenu/psMenu.module";
import { psDashboardModule } from "../psDashboard/psDashboard.module";
import { psFramework } from "./psFramework";

export const psFrameworkModule: angular.IModule = angular
    .module('psFramework', [psMenuModule.name, psDashboardModule.name])
    .component('psFramework', psFramework);