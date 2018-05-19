class PsMenuController {
  public text: string;

  constructor() {
    this.text = 'PS Menu!';
  }
}

export const psMenu = {
  template: require('./psMenu.html'),
  controller: PsMenuController
};

