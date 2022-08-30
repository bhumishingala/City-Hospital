import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
                    reject({ payload: "Email is Already Verified" });
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
                    resolve({ payload: user });
                } else {
                    resolve({ payload: "First Is Email Varify." });
                }

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") == 0) {
                    reject({ payload: "Email or Password Wrong" });
                } else if (errorCode.localeCompare("auth/user-not-found") == 0) {
                    reject({ payload: "Password Wrong" });
                } else {
                    reject({ payload: errorCode });
                }


            });
    })
}

export const SignOutapi = () => {
    console.log("SignInapi");

    return new Promise((resolve,reject) => {
        signOut(auth)
            .then(() => {
                resolve({payload : "Logout SuccessFully"})
            })
            .catch(() => {
                reject({payload : "SomeThing Is Worng"});
            })
    })
}

export const ForgotPassApi = (data) => {
    console.log(data);
}
