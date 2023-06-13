import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBpzd35gSrMpwiFWOZk8OKGulVJMrTZKqw',
  authDomain: 'baryo-5c62c.firebaseapp.com',
  projectId: 'baryo-5c62c',
  storageBucket: 'baryo-5c62c.appspot.com',
  messagingSenderId: '856697187299',
  appId: '1:856697187299:web:8205af6c79797ed8e58ed6',
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
