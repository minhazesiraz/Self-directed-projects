import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from '../../../firebase.config';

export const OAuthServices = createContext(null);
const auth = getAuth(app);

const OAuth = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const enterCredentials = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
      setLoading(true);
      return signOut(auth);
   }

   const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
         displayName: name
         // displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('currentUser', currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unSubscribe();
      }
   }, []);

   const func = {
      user,
      loading,
      createUser,
      enterCredentials,
      logout,
      updateUserProfile
   }

   return (
      <OAuthServices.Provider value={func}>
         {children}
      </OAuthServices.Provider>
   );
};

OAuth.propTypes = {
   children: PropTypes.node.isRequired,
};

export default OAuth;