import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";


export const SignUpapi = (data) => {
    console.log("SignUpapi", data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Check Your Email." });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    resolve({ payload: "Email is Already Verified" });
                } else {
                    reject({ payload: errorCode });
                }
            });

    })
}

export const SignInapi = (data) => {
    console.log("SignInapi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    reject({ payload: "Login Is Succesfully" });
                } else {
                    reject({ payload: "First Is Email Varify." });
                }

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") == 0) {
                    reject({ payload: "Please Check Your Email." });
                } else if (errorCode.localeCompare("auth/user-not-found") == 0) {
                    reject({ payload: "Please Check Your Password" });
                } else {
                    reject({ payload: errorCode });
                }


            });
    })
}
