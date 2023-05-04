import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "graphql-auth-20ff8.firebaseapp.com",
  projectId: "graphql-auth-20ff8",
  storageBucket: "graphql-auth-20ff8.appspot.com",
  messagingSenderId: "831783528797",
  appId: "1:831783528797:web:6d8364fda1b793462920b4",
};

const app = initializeApp(firebaseConfig);
