import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { seedDatabase } from "../seed";

// We need to somehow seed the database

// We need to config here
const config = {
  apiKey: "AIzaSyCSI9Sp_xrXZ2nt1jLs8ZC0jfbu7GtG-zQ",
  authDomain: "netflix-clone-651d1.firebaseapp.com",
  projectId: "netflix-clone-651d1",
  storageBucket: "netflix-clone-651d1.appspot.com",
  messagingSenderId: "703305968941",
  appId: "1:703305968941:web:dbabe49c27cb96e83237a4",
};

// We need to initialize here
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
