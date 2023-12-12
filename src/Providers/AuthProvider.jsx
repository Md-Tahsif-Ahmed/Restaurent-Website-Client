import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const createUser = ( name, photo, email, password) => {
    setLoading(true);
    console.log( name, photo, email, password)
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => userCredential)
          .catch((updateError) => {
            console.error('Error updating profile:', updateError);
            setError(updateError.message);
            throw updateError;
          });
      })
      .catch((createError) => {
        console.error('Error creating user:', createError);
        setError(createError.message);
        throw createError;
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((signInError) => {
        console.error('Error signing in:', signInError);
        setError(signInError.message);
        throw signInError;
      })
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .catch((googleSignInError) => {
        console.error('Error signing in with Google:', googleSignInError);
        setError(googleSignInError.message);
        throw googleSignInError;
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .catch((signOutError) => {
        console.error('Error signing out:', signOutError);
        setError(signOutError.message);
        throw signOutError;
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log('current value of the user', currentUser);
      setUser(currentUser);
      setLoading(false);
      setError(null);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, error, createUser, signInUser, signInWithGoogle, logOut };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
