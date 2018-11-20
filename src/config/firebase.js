import firebase from "firebase";

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
