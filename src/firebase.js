import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdD1vcpbJEdaCPHaBmleRzoLmHVdIYnEY",
  authDomain: "goalcoach-974ce.firebaseapp.com",
  databaseURL: "https://goalcoach-974ce.firebaseio.com",
  projectId: "goalcoach-974ce",
  storageBucket: "",
  messagingSenderId: "157827823883",
  appId: "1:157827823883:web:ee84d5ff9c7861c2"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const goalRef = firebase.database().ref("goals");
