import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxxT5NwnEQtW6q_gNl12PmUXdXraUqzNs",
  authDomain: "user-account-project-a35ca.firebaseapp.com",
  databaseURL: "https://user-account-project-a35ca.firebaseio.com",
  projectId: "user-account-project-a35ca",
  storageBucket: "user-account-project-a35ca.appspot.com",
  messagingSenderId: "1000774835213",
  appId: "1:1000774835213:web:a50ddb611e416b3b7ac944"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;