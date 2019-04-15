import * as firebase from 'firebase';
require('firebase/firestore');

const config = {
    apiKey: "AIzaSyD3i6uLciWwZ7nmMFW0-WX_-cEG0MywVRE",
    authDomain: "react-firebase-b2774.firebaseapp.com",
    databaseURL: "https://react-firebase-b2774.firebaseio.com",
    projectId: "react-firebase-b2774",
    storageBucket: "react-firebase-b2774.appspot.com",
    messagingSenderId: "927061998977"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
