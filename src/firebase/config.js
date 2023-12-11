import { initializeApp } from 'firebase/app'
import { getAuth }       from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBmNMzbjdabvHon55e2GXquD_lO9u4wTd8",
    authDomain: "vuex-36899.firebaseapp.com",
    projectId: "vuex-36899",
    storageBucket: "vuex-36899.appspot.com",
    messagingSenderId: "570379270868",
    appId: "1:570379270868:web:69dd3c98bb0482d84e1941"
  };

  // init firebase

  initializeApp(firebaseConfig)

  // init firebase auth 
  const auth = getAuth()

  export { auth }