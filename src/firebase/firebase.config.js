import { initializeApp } from "firebase/app";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aHA-Ze-OPmJto2m-bf2ofuD3mUQHX5w",
  authDomain: "bisto-boss-ded5e.firebaseapp.com",
  projectId: "bisto-boss-ded5e",
  storageBucket: "bisto-boss-ded5e.appspot.com",
  messagingSenderId: "348384683038",
  appId: "1:348384683038:web:e6a2c27679f9b2880d7a0f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;