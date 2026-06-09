import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL5rgDSQasNT68LuI4uniOSFV0MjqTlPg",
  authDomain: "open-window-f40b0.firebaseapp.com",
  projectId: "open-window-f40b0",
  storageBucket: "open-window-f40b0.firebasestorage.app",
  messagingSenderId: "643103381860",
  appId: "1:643103381860:web:41582d4e52f626e2808271",
  measurementId: "G-CRNB5N7GFQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);