import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-AaNAi52WH--XNs7_NB1-Wm9AUgEx-Q4",
  authDomain: "fooddeliveryapp-be23c.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-be23c-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp-be23c",
  storageBucket: "fooddeliveryapp-be23c.appspot.com",
  messagingSenderId: "572090966934",
  appId: "1:572090966934:web:49f088a846e0f1ec09b3b7",
  measurementId: "G-63WTTML26D"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
