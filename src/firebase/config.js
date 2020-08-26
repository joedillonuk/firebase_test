import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwTTOF3sgYFc7sIV0mp2jfJ8abamV--jI',
  authDomain: 'newfirebasetest-fa82f.firebaseapp.com',
  databaseURL: 'https://newfirebasetest-fa82f.firebaseio.com/',
  projectId: 'newfirebasetest-fa82f',
  storageBucket: 'newfirebasetest-fa82f.appspot.com',
  messagingSenderId: '1032799373695',
  appId: '1:1032799373695:ios:ee845a9d9aac2db27f724a',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
