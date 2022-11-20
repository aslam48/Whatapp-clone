import firebase from "./firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBfTCMSNGIiZ4_ROHIOAEHWI-YN5Px2vSM",
  authDomain: "whatapp-clone-c5d0f.firebaseapp.com",
  projectId: "whatapp-clone-c5d0f",
  storageBucket: "whatapp-clone-c5d0f.appspot.com",
  messagingSenderId: "68415856237",
  appId: "1:68415856237:web:433cf663a64c820e88a964",
  measurementId: "G-DP33RBZ0N0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export  { auth, provider}
export default db