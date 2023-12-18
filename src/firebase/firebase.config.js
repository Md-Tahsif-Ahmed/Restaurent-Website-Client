import { initializeApp } from "firebase/app";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  IMAGE_HOSTING_KEY: import.meta.env.VITE_IMAGE_HOSTING_KEY
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;