import { auth } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


// =====================
// FORM TOGGLE
// =====================



const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

document.getElementById("showLogin").addEventListener("click", () => {

    loginForm.style.display = "block";
    signupForm.style.display = "none";

    document.getElementById("showLogin").classList.add("active");
    document.getElementById("showSignup").classList.remove("active");

});

document.getElementById("showSignup").addEventListener("click", () => {

    loginForm.style.display = "none";
    signupForm.style.display = "block";

    document.getElementById("showSignup").classList.add("active");
    document.getElementById("showLogin").classList.remove("active");

});


// =====================
// SIGNUP
// =====================

document.getElementById("signupBtn").addEventListener("click", () => {

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (!email || !password || !confirmPassword) {

        showToast("Please fill all fields", "error");
        return;

    }

    if (password !== confirmPassword) {

        showToast("Passwords do not match","error");
        return;

    }

    createUserWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then((userCredential) => {

        showToast("Account Created Successfully!");

        signupForm.style.display = "none";
        loginForm.style.display = "block";

        document.getElementById("showLogin").classList.add("active");
        document.getElementById("showSignup").classList.remove("active");

        document.getElementById("loginEmail").value = email;

    })

    .catch((error) => {

        showToast(error.message,"error");

    });

});


// =====================
// LOGIN
// =====================

document.getElementById("loginBtn").addEventListener("click", () => {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    if (!email || !password) {

        showToast("Please enter email and password", "error");
        return;

    }

    signInWithEmailAndPassword(
        auth,
        email,
        password
    )

    .then((userCredential) => {

        window.location.href = "index.html";

    })

    .catch((error) => {

        showToast("invalid email or password","error");

    });

});
function showToast(message,type="success"){

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.className = "";

    toast.classList.add("show");
    toast.classList.add(type);

    setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}
document.getElementById("forgotPassword").addEventListener("click", () => {

    const email =
        document.getElementById("loginEmail").value.trim();

    if (!email) {

        showToast(
            "Please enter your email first",
            "error"
        );

        return;
    }

    sendPasswordResetEmail(auth, email)

        .then(() => {

            showToast(
                "Password reset link sent to your email"
            );

        })

        .catch((error) => {

            showToast(
                error.message,
                "error"
            );

        });

});