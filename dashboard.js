import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const allowedUsers = [
    "admin@openwindow.com",
    "supriya@gmail.com"
];

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "auth.html";
        return;
    }

    if (!allowedUsers.includes(user.email)) {

        alert("You are not authorized to access this dashboard.");

        signOut(auth).then(() => {
            window.location.href = "auth.html";
        });

        return;
    }

    document.getElementById("userEmail").textContent =
        `Welcome ${user.email}`;

});

document.getElementById("logoutBtn").addEventListener("click", () => {

    signOut(auth).then(() => {
        window.location.href = "auth.html";
    });

});