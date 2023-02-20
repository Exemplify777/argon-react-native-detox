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

  log.info("Opening profile menu.");
  it('should open Profile menu', async () => {
      await element(by.id('stackProfile')).tap();
      await expect(element(by.id('blockProfile'))).toBeVisible();
      await element(by.id('blockProfile')).scrollTo('bottom');
      await device.pressBack();
  });

});