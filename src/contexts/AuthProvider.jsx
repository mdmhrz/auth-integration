import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(false)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(false)
    }

    const signOutUser = () => {
        return signOut(auth)
        setLoading(false)
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('has current user');
    //     } else {
    //         console.log("current user nai");
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user inside useEffect", currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;