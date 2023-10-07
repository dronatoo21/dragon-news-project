import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from "../firebase/firebase.config";

export const authContext = createContext(null);
const auth = getAuth(App);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (eamil, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, eamil, password)
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const logIn = (eamil, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, eamil, password)
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user haah', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    },[]);

    const authInfo = {
        user,
        createUser,
        logOut,
        logIn,
        loading,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;