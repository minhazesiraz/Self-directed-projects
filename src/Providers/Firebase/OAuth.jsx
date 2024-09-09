import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
      enterCredentials
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