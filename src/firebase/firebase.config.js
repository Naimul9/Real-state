
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYloUwFaYfGw3RjCdu1QqzEezcBZGe0MA",
  authDomain: "assignment-9-a1096.firebaseapp.com",
  projectId: "assignment-9-a1096",
  storageBucket: "assignment-9-a1096.appspot.com",
  messagingSenderId: "774443300966",
  appId: "1:774443300966:web:cccfc2aa94613c829e15a7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

