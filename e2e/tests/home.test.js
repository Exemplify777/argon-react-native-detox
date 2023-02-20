describe('Argon', () => {
  beforeAll(async () => {
      await device.launchApp();
  });

  beforeEach(async () => {
      await device.reloadReactNative();
  });

  log.info("Opening welcome screen");
  it('should have welcome screen', async () => {
      await expect(element(by.id('welcomeBlock'))).toBeVisible();
  });

  log.info("Opening getting started screen");
  it('should show main after tap', async () => {
      await element(by.id('gettingStarted')).tap();
      await expect(element(by.id('gettingStarted'))).toBeVisible();
  });

  log.info("Opening home menu.");
  it('should open Home menu', async () => {
      await element(by.id('stackHome')).tap();
      await expect(element(by.id('blockHome'))).toBeVisible();
      await element(by.id('blockHome')).scrollTo('bottom');
      await device.pressBack();
  });

});