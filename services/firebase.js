// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import constants from "./constants";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: constants.firebaseKey,
  authDomain: "mapa-de-la-policia-la-plata.firebaseapp.com",
  projectId: "mapa-de-la-policia-la-plata",
  storageBucket: "mapa-de-la-policia-la-plata.appspot.com",
  messagingSenderId: "940108879805",
  appId: "1:940108879805:web:525d65fc6fa6621aa724d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(constants.reCaptchaKey),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export { storage, ref, uploadBytes, getDownloadURL };
