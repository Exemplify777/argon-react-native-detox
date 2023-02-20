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
    
  log.info("Opening register menu.");
  it('should open Register menu', async () => {
      await element(by.id('stackRegister')).tap();
      await expect(element(by.id('blockRegister'))).toBeVisible();
      await expect(element(by.id('fieldName'))).typeText('Name1');
      await expect(element(by.id('fieldEmail'))).typeText('Email1');
      await expect(element(by.id('fieldPassword'))).typeText('Password1');
      await expect(element(by.id('fieldAgree'))).tap();
      await expect(element(by.id('buttonPrivacy'))).tap();
      await expect(element(by.id('buttonCreateAccount'))).tap();

      await device.pressBack();
  });
});