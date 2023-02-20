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

  log.info("Opening elements menu.");
  it('should open Elements menu', async () => {
      await element(by.id('stackElements')).tap();
      await expect(element(by.id('blockElements'))).toBeVisible();
      await expect(element(by.id('buttonDefault'))).tap();
      await expect(element(by.id('buttonPrimary'))).tap();
      await expect(element(by.id('buttonSuccess'))).tap();
      await expect(element(by.id('buttonWarning'))).tap();
      await expect(element(by.id('buttonPrivacy'))).tap();
      await expect(element(by.id('buttonError'))).tap();
      await expect(element(by.id('buttonDelete'))).tap();
      await expect(element(by.id('buttonSaveForLater'))).tap();
      await expect(element(by.id('inputRegular'))).typeText('Text1');
      await expect(element(by.id('inputRegularCustom'))).typeText('Text2');
      await expect(element(by.id('inputIconLeft'))).typeText('Text3');
      await expect(element(by.id('inputIconRight'))).typeText('Text4');
      await expect(element(by.id('inputSuccess'))).typeText('Text5');
      await expect(element(by.id('inputErrorInput'))).typeText('Text6');
      await expect(element(by.id('switchOn'))).tap();
      await expect(element(by.id('switchOff'))).tap();
     
      await element(by.id('blockElements')).scrollTo('bottom');
      await device.pressBack();
  });

});