import { Component } from "../../tools/annotations";

class AppComponentController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
    console.log('ctr');
  }

  $onInit() {
    console.log('$onInit');
  }
}

@Component({
  controller: AppComponentController,
  template: require('./app.component.html')
})
export class AppComponent implements ng.IComponentOptions {
}