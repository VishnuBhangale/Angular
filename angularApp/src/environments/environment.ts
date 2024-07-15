// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'http://localhost:3000',
 
  firebase: {
    apiKey: "AIzaSyCzhfj19Jh9eZhEclKhvcShf2jT7x-gd_k",
    authDomain: "medihealth-10d4c.firebaseapp.com",
    projectId: "medihealth-10d4c",
    storageBucket: "medihealth-10d4c.appspot.com",
    messagingSenderId: "266008863690",
    appId: "1:266008863690:web:38f23f0ffb74015c66e533"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
