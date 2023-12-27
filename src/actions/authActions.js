// authActions.js
import { auth } from '../firebase';

// authActions.js
export const signUp = async (email, password) => {
 
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      
    }
  };



export const login = async (email, password) => {

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
  
    }

};