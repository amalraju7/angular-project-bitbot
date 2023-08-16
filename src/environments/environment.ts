import { fireBaseKey } from 'private/firebase-key';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCklG3QleTmCZoSVnf4a_DVY6BYZUwp03g",
    authDomain: "organic-shop-a8ba0.firebaseapp.com",
    databaseURL: "https://organic-shop-a8ba0-default-rtdb.firebaseio.com/",
    projectId: "organic-shop-a8ba0",
    storageBucket: "organic-shop-a8ba0.appspot.com",
    messagingSenderId: "396820018276",
}
};
