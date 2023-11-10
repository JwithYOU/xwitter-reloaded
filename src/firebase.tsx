import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAC7afcaTbYWuQt3xTOqMS8f7BZtXq0JWI",
  authDomain: "xwitter-reload.firebaseapp.com",
  projectId: "xwitter-reload",
  storageBucket: "xwitter-reload.appspot.com",
  messagingSenderId: "692959651601",
  appId: "1:692959651601:web:8731b360c33854904e8eb0",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_AUTH_ID,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_ID,
//   messagingSenderId: import.meta.env.VITE_MESSAGE_ID,
//   appId: import.meta.env.VITE__APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
