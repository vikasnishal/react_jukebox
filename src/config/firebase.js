import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/database";

const config = {
  apiKey: "AIzaSyCoK_4ht4gam7W830TnoQcoB8kDMTOlvho",
  authDomain: "react-jukebox.firebaseapp.com",
  databaseURL: "https://react-jukebox.firebaseio.com",
  projectId: "react-jukebox",
  storageBucket: "react-jukebox.appspot.com",
  messagingSenderId: "522536953159"
};
const fire = firebase.initializeApp(config);

export default fire;
