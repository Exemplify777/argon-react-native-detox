# [Argon React Native](https://creativetimofficial.github.io/argon-react-native/docs/#)

![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-react-native/arg-rn-thumbnail.jpg)

Argon React Native is a fully coded app template built over [Argon React Native](https://github.com/creativetimofficial/argon-react-native/releases/tag/v1.8.1), [React Native](https://facebook.github.io/react-native/?ref=creativetim) and [Expo](https://expo.io/?ref=creativetim).
### Configure

- Install Node 14.0+
- Install dependencies:
`npm install`
- Configure your local environment as specified [Detox manual](https://wix.github.io/Detox/docs/introduction/getting-started)
- Check your local device, emulator names (Android) correctly specified in source code, as described [here](https://wix.github.io/Detox/docs/introduction/project-setup#step-3-device-configs)

### Test Case
- Launch application
- Check Welcome page opened
- Press 'Get Started' button
- Open from menu 'Home' page and scroll down
- Open from menu 'Profile' page and scroll down
- Open from menu 'Account' page and scroll down
    - Fill 'Name' field with 'Name1' value
    - Fill 'Email' field with 'email@email.com' value
    - Fill 'Password' field with 'password1' value
    - Check 'I agree with...' checkbox.
- Open from menu 'Elements' page and scroll down
- Open from menu 'Articles' page and scroll down


### Run test
- Build: `detox build  --configuration android.emu.release`
- Run test: `detox test --configuration android.emu.release`