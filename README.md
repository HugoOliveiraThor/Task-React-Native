# Task-React-Native
A simple task made in react native 

## Screens
### Login 
[Login page](https://github.com/HugoOliveiraThor/Task-React-Native/blob/master/assets/imgs/screen_login.png)

### Signup
[Signup page](https://github.com/HugoOliveiraThor/Task-React-Native/blob/master/assets/imgs/screen_signup.png)

## Command to start emulator without open android studio
emulator -no-snapshot -avd NEXUS_5X_API_26
## List emulators created 
emulator -list-avds
## rnpm - what is ? React native package manager 
ex :"assets": [
      "./assets/fonts/"
    ]
- where my fonts are 
to run you have to react-native link

## remove folder in linux 
rm -rf name folder

## command reset cache 
react-native start --reset-cache

## command clear watchman 
watchman watch-del-all

## problems with depencies 
his might be related to https://github.com/facebook/react-native/issues/4968
To resolve try the following:
  1. Clear watchman watches: `watchman watch-del-all`.
  2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
  3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
  4. Remove haste cache: `rm -rf /tmp/haste-map-react-native-packager-*`.


<!-- "react-native-action-button": "^2.8.5", -->
<!-- "react-native-vector-icons": "^5.0.0" -->
<!-- react-native-swipeable -->
<!-- react-navigation -->