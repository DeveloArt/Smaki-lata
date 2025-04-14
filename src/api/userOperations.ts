"use client";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "./firebaseConfig";

export const fetchUserData = async (userId: string) => {
  const usersDocRef = doc(firestore, "users", userId);
  const userData = (await getDoc(usersDocRef)).data() as any;
  return userData;
};

export const signInWithEmail = (
  email: string,
  password: string,
  setLoginErrors: (n: string) => void,
  setIsLoggedIn: (n: boolean) => void
) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    })
    .catch(({ code }) => {
      switch (code) {
        case "auth/user-not-found":
          setLoginErrors("Invalid login or password");
          break;
        case "auth/wrong-password":
          setLoginErrors("Invalid login or password");
          break;
        case "auth/network-request-failed":
          setLoginErrors("Network connection issue during authentication");
          break;
        case "auth/too-many-requests":
          setLoginErrors(
            "Too many login attempts in a short period, the account has been locked."
          );
          break;
        case "auth/user-disabled":
          setLoginErrors("User account has been disabled by the administrator");
          break;
        case "auth/invalid-credential":
          setLoginErrors(
            "The provided authentication credentials are incorrect"
          );
          break;
        default:
          setLoginErrors("Oops... something went wrong.");
      }
    });
};

export const logoutUser = async () => {
  try {
    const storedToken = localStorage.getItem("token");
    if (!storedToken)
      throw new Error("Error while removing the token from storage");
    const auth = getAuth();
    await signOut(auth);
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Error during logging out from Firebase:", error);
    throw error;
  }
};

const checkForUser = () => {
  return new Promise((_, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
      },
      reject
    );
  });
};
checkForUser();

export const getCurrentUserUid = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user.uid); // Resolve the promise with user.uid
        } else {
          resolve(null); // Resolve with null if there's no user
        }
        unsubscribe(); // Unsubscribe from the listener
      },
      reject
    );
  });
};

export const fetchCurrentUser = async () => {
  try {
    const uid = await getCurrentUserUid();
    if (uid) {
      console.log("user id:", uid);
      return uid;
    } else {
      console.log("No user is signed id");
    }
  } catch (error) {
    console.error("Error fetching user UID:", error);
  }
};
