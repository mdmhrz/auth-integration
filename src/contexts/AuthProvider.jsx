import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('has current user');
        } else {
            console.log("current user nai");
        }
    })

    const userInfo = {
        createUser,
        signInUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;