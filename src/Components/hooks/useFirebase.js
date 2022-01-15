import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import swal from "sweetalert";

// InitializeFirebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // Register User
  const signUpUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        swal("Good job!", "Your successfully Sign Up.!", "success");
        document.getElementById("signUpInForm").reset();
        history.replace("/home");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: `${error.message.slice(16, 50)}`,
          icon: "error",
          button: "ok",
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Login User
  const logInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        swal("Good job!", "Your successfully Logged In.!", "success");
        document.getElementById("logInForm").reset();
        const destination = location?.state?.from || "/home";
        history.replace(destination);
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: `${error.message.slice(16, 100)}`,
          icon: "error",
          button: "Ok",
        });
      })
      .finally(() => setIsLoading(false));
  };

  // User state Observer
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // sign up with google
  const handleSignUpGoogle = (history) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        swal("Great!", "You are successfully Logged In.!", "success").then(
          (e) => {
            history.push("/home");
          }
        );
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: `${error.message.slice(16, 100)}`,
          icon: "error",
          button: "Ok",
        });
      });
  };

  // Find Admin
  useEffect(() => {
    fetch(`https://stormy-everglades-36632.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  // LogOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        swal({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          button: "Ok",
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Save user To database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://stormy-everglades-36632.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return {
    user,
    signUpUser,
    logOut,
    logInUser,
    isLoading,
    setIsLoading,
    handleSignUpGoogle,
    admin,
  };
};

export default useFirebase;
