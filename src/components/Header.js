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
        console.log('13121313', auth.currentUser === getAuth())
    }
    function signOutUser() {
        console.log('outed', auth.currentUser)
        signOut(auth);
    }
    function isUserSignedIn() {
        console.log(getAuth().currentUser)
        return !!getAuth().currentUser;
    }

    function getProfilePicUrl() {
        return auth.currentUser.photoURL || '/images/profile_placeholder.png';
    }

    function getUserName() {
        return auth.currentUser.displayName;
    }
    return (
        <>  
            {<Nav status={isUserSignedIn()} signIn={signIn} signOut={signOutUser} />}
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOutUser}>Sign out</button>
            <button onClick={() => {
                console.log(user)
                console.log(isUserSignedIn())
                console.log(getProfilePicUrl())
                console.log(getUserName())
            }}>user out</button>
        </>
    )
}

export default Header