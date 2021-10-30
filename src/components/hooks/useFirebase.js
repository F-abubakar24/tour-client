import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/Firebase.init";


initializeAuthentication()
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // google sign in method
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    }

    // logOut process
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch(error => {
            console.log("logOut-->", error.message);

        }).finally(() => setIsLoading(false));
    }

    // The recommended way to get the current user is by setting an observer on the Auth object
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe
    }, [])


    return {
        user,
        isLoading,
        logOut,
        googleSignIn,
    };
};

export default useFirebase;