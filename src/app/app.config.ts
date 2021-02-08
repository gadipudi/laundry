import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  webApplicationId: string
}

export interface AppConfig {
  appName: string;
  apiBase: string;
  consumerKey: string;
  consumerSecret: string;
  adminUsername: string;
  adminPassword: string;
  googleApiKey: string;
  oneSignalAppId: string;
  oneSignalGPSenderId: string;
  paypalSandbox: string;
  paypalProduction: string;
  payuSalt: string;
  payuKey: string;
  stripeKey: string;
  availableLanguages: Array<any>;
  firebaseConfig: FirebaseConfig;
}

export const BaseAppConfig: AppConfig = {
  appName: "Laundry Run",
  apiBase: "http://52.62.21.203/",
  consumerKey: "",
  consumerSecret: "",
  adminUsername: "prashant",
  adminPassword: "prashant243",
  googleApiKey: "AIzaSyB7eSkUAppz9vcLRWuknebE2ISzUZCbpeI",
  oneSignalAppId: "8e9ffcd6-a8f1-4dea-a0a9-95d6dfb0cd20",
  oneSignalGPSenderId: "404498054761",
  paypalSandbox: "",
  paypalProduction: "",
  payuSalt: "",
  payuKey: "",
  stripeKey: "",
  availableLanguages: [{
    code: 'en',
    name: 'English'
  }, {
    code: 'ar',
    name: 'Arabic'
  }, {
    code: 'es',
    name: 'Spanish'
  }, {
    code: 'fr',
    name: 'French'
  }, {
        code: 'pt',
        name: 'Portuguese'
    }, {
        code: 'it',
        name: 'Italian'
    }],
  firebaseConfig: {
    webApplicationId: "404498054761-qulfrd8st1a8nsvh0t522auljuf1ugcs.apps.googleusercontent.com",
    apiKey: "AIzaSyB7eSkUAppz9vcLRWuknebE2ISzUZCbpeI",
    authDomain: "stproject-ea2a8.firebaseapp.com",
    databaseURL: "https://stproject-ea2a8.firebaseio.com",
    projectId: "stproject-ea2a8",
    storageBucket: "stproject-ea2a8.appspot.com",
    messagingSenderId: "404498054761"
  }
};