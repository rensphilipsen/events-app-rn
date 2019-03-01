# Events App

## Installation

run `yarn install` or `npm install` to install the dependencies.

copy `.env.example` to `.env` and fill the values.

## Get Started

Run project for iOS and Android by
respectivlely using the commands `react-native run-ios` and `react-native run-android`.

## Structure

### App folder
All React Native logic is located in `/app` folder. Within this folder the
app is instantiated with the `index.js` file.
This folder has these subfolders:
 - `/components` - Within there are folders used for stateless components.
 - `/config` - This folder contains all the configuration files and settings for this app.
    - There is a `routes.js` file where all the logic for navigation is located.
 - `/screens` - all the screens used over the app.
 - `/styles` - general files for styling.
    - `theme.js` contains all the branding colors and fonts.
 - `/utils` - Helpers for the app.
 - `/reducers` - Redux reducers.
 - `/actions` - Redux actions.

### Assets folder
Contains the fonts and images for the app.


### Continious Integration
For this app there is an implementation of Continous Integration. the folder for this configuration can be found in `.circleci`.
CircleCI is the hosting company for our CI