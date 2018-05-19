require('./psFramework.css');

class PsFrameworkController {
  public text: string;

  constructor() {
    this.text = 'PS Framework!';
  }
}

export const psFramework = {
  template: require('./psFramework.html'),
  controller: PsFrameworkController
};

