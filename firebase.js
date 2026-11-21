
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC76uVl4dD0_NJP6FiVn0opU6FyAKKILkw",
  authDomain: "network-krypto-ai.firebaseapp.com",
  projectId: "network-krypto-ai",
  storageBucket: "network-krypto-ai.firebasestorage.app",
  messagingSenderId: "587783161645",
  appId: "1:587783161645:web:7195e21dd6aae7961e35a4",
  measurementId: "G-78708XQEQ2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

console.log("Network Krypto AI Firebase connected!");
