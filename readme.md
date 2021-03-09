# WeatherApp

Weather app is a hybrid mobile solution built using React Native, it fetches user's GPS and uses API's to reverse geocode user's location and present current weather and a seve day forecast

![image](https://user-images.githubusercontent.com/50939810/110226676-1117c580-7ed0-11eb-8beb-14d97b233693.png) ![image](https://user-images.githubusercontent.com/50939810/110231597-6e733d00-7ef7-11eb-851e-a2bb83b1245d.png)

## Running it

### Initializing

To start the weatheApp you will need the standard [React Native development ambient](https://reactnative.dev/docs/environment-setup "React Native Getting Started")

After setup, you can use npm run android for android debug build and npm run ios for iOS debug build

### Tests

Currently tests are being done with Jest, use npm run  tests to start the test interface

### Flipper

WeatherApp is integrated with [Flipper](https://fbflipper.com/ "Flipper Website") to debug and develop, you may notive that flipper plugins to inspect redux are already installed

**IMPORTANT** if you run into issues, specially in macOS and iOS, check your flipper settings, [react native is shipping an outdated version of flipper](https://fbflipper.com/docs/getting-started/react-native/ "React native and flipper version")

### APIs

[Open Weather API](https://openweathermap.org/api "Open weather home") is beeing used to get Weather data
[Nominatim.openstreetmap](https://nominatim.openstreetmap.org/ui/search.html "Nominatim home") is beeing used to reverse geocode user's location

#### API keys
 
In projects root you will find a `env.dev.example.json` and a `env.prod.example.json`, those files contain api keys for develoment and production ambients for weather app, an `env.dev.json` and a `env.prod.json` ***MUST*** be added to this folder in other for the app to work
* `env.dev.json` and a `env.prod.json` are added to `.gitignore`
* Keys in .example files are free keeys that will be avainble for use at least until march, 30th, 2021
* * as free keys, keep in mid that they DO have their use limitations
* * in [open weather](https://openweathermap.org/api) you can create an account and generate you own API keys

****IMPORTANT!****

As this is an example app with free keys and basically no backend, no authentication or security method was implemented for this keys **DO NOT** do it for apps in production
IUdeally, use a backend and tokens to verify your user integrity and avoid storing keys in your app, for as demonstrated [here](https://blog.approov.io/how-to-extract-an-api-key-from-a-mobile-app-with-static-binary-analysis) and reinforced in [this post](https://stackoverflow.com/questions/56619034/storing-api-keys/56935866) apps are vulnerable to attacks, specially attacks using to reverse-engineering and to MitM, the reccommended approach is to have an server authentication, or a serverless function to help mitigate those issues for production

## What you should expect to find and what to cansider when contributing

* Typescript
* Flux
* Redux Toolkit

![image](https://user-images.githubusercontent.com/50939810/110233989-aa61ce80-7f06-11eb-9104-45b2b9cdde55.png)

### Architecture

According to flux architecture, expect to find API calls beeing made through redux-toolkit + thunks

### Componentization

Also expect to find a heavy use for shared folder and components/fragments, by rule of thumb when a component can be used in multiple places it should be found in caomponents folders, and when it's only composing an specific screen, it should be found in the said screen folder, inside a fragments folder


### Scenes and screens

Expect to find screens divided by scenes as of today (March, 07 of 2021) only the first scene `display weather` is available, therefore it might be confusing to understand the concept behind scenes and screens

The idea is to be able to separet gorups of screen with similar pourpose, for example, when we add another screens to:
* Visualise forecast details
* Visualise other cities current weather
* Log-in
* Create account

This would be somewhat the expected outcome:

```
Scenes|
      |-DisplayWeather|
      |               |-CurrentWeather
      |               |-ForecastDetails
      |               |-ForeignWeather
      |
      |
      |
      |-UserAuthentication|
                          |-Login
                          |-Register
```

### Roadmap to future updates

- [X] Update app packages name for android and ios
- [ ] Add app splash page
- [ ] Add app icon
- [ ] Add app second language and change language menu
- [ ] Add tests for translations, screens, shared and modal
- [ ] Add a second screen - more details about current weather
- [ ] Add a third screen - weather details about other places
- [ ] Add a [NetInfo](https://www.npmjs.com/package/@react-native-community/netinfo, "Net info package") network interceptors to warn users with no internet
- [ ] Add Individual error handlers for each GPS api call, allowing WeatherApp to update weather and/or location independently
