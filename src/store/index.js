import { createStore } from 'vuex'

// firebase import
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  getters: {
    
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state', state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
     async signup(context, { email, password }) {
      console.log('signup action')

      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could comlete signup')
      }
   
    },
    async login(context, { email, password }) {
      console.log('login action')

      //async code
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could comlete login')
      }
   
    },
    async logout(context) {
      console.log('logout action:')

      await signOut(auth)
      context.commit('setUser', null)
    }
  },
  modules: {
    
  }
})


const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady' , true)
  store.commit('setUser', user)
  unsub()
});

export default store