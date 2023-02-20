describe('Welcome view', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have onboarding screen', async () => {
    const attributes = await element(by.id('buttonGettingStarted')).getAttributes();
    log.info(attributes.text)
    await device.launchApp();
    await expect(element(by.id('buttonGettingStarted'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('buttonGettingStarted')).tap();
  //   await expect(element(by.id('buttonGettingStarted'))).toBeVisible();
  // });

});
