class PsDashboardController {
  public text: string;

  constructor() {
    this.text = 'PS Dashboard!';
  }
}

export const psDashboard = {
  template: require('./psDashboard.html'),
  controller: PsDashboardController
};

