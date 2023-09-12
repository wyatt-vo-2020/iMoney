// import firebase from "firebase/app";
// import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUMctwa0lbZxu3phJi8AF7DSzmuknnpa8",
  authDomain: "imoney-9d49f.firebaseapp.com",
  projectId: "imoney-9d49f",
  storageBucket: "imoney-9d49f.appspot.com",
  messagingSenderId: "1013156495129",
  appId: "1:1013156495129:web:06d6736f64cd8212c64f88",
  measurementId: "G-07WE8PXZ4G",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }
