import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import {initializeApp} from firebase/app
// import{getAuth} from firebase/auth

const app =firebase.initializeApp({
  // const firebaseConfig={
  apiKey: "AIzaSyDJWIQ2x0EeUS-fvha00nk7fqpSeKg_Xug",
  authDomain: "authdemo-2cf22.firebaseapp.com",
  projectId: "authdemo-2cf22",
  storageBucket: "authdemo-2cf22.appspot.com",
  messagingSenderId: "227413571980",
  appId: "1:227413571980:web:886d27c303b7db07ee3ea9"
}
);

export const auth=app.auth();
export default app;

// const app =initializeApp(firebaseConfig);
// export const auth =getAuth(app);
// export default app;