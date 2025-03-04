// import { initializeApp } from "firebase/app";
// import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
// import {addDoc, collection, getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyA1iN6E9Ri4xB1I2azc13VmD6dAPaoPEdo",
//   authDomain: "netflix-clone-c27c0.firebaseapp.com",
//   projectId: "netflix-clone-c27c0",
//   storageBucket: "netflix-clone-c27c0.firebasestorage.app",
//   messagingSenderId: "518104762712",
//   appId: "1:518104762712:web:86210781cebbaa93447d2d"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async(name, email, password) =>{
//     try {
//        const res = await createUserWithEmailAndPassword(auth, email, password);
//        const user = res.user;
//        await addDoc(collection(db, "user"), {
//         uid: user.uid,
//         name,
//         authProvider:"local"
//         email,
//        })
//     } catch (error) {
//         console.log(error)
//         alert(error)
//     }

// }

// const login = async (emaile, password) =>{
//     try {
//         signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//         console.log (error);
//         alert(error);
//     }
// }
// const logout = ()=>{
//     signOut(auth)
// }

// export {auth, db, login, signup, logout}

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA1iN6E9Ri4xB1I2azc13VmD6dAPaoPEdo",
  authDomain: "netflix-clone-c27c0.firebaseapp.com",
  projectId: "netflix-clone-c27c0",
  storageBucket: "netflix-clone-c27c0.firebasestorage.app",
  messagingSenderId: "518104762712",
  appId: "1:518104762712:web:86210781cebbaa93447d2d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",  // Fixed: Added comma
      email,  // Fixed: Added email
    });
  } catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "));
   
  }
}

const login = async (email, password) => {  // Fixed: Corrected 'emaile' to 'email'
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout };
