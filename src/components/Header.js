import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, } from "firebase/auth";
import { auth } from "../Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Nav from './Nav'
import React from "react";

const Header = () => {

    const [user] = useAuthState(auth)
    async function signIn() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }
    function signOutUser() {
        signOut(auth);
    }
    function isUserSignedIn() {
        return !!getAuth().currentUser;
    }
    return (
        <>  
            {<Nav status={isUserSignedIn()} signIn={signIn} signOut={signOutUser} />}
        </>
    )
}

export default Header