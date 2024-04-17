import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

   

    const [user, setUser ] = useState(null)
    const [loading , setLoading ] =useState(true)
    

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password )
    }
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
console.log('working' , currentUser)
        })
        return () =>{
            unSubscribe()

        }
    } ,[])

    const authInfo = {user, createUser, signInUser, LogOut, loading, signInWithGoogle, signInWithGithub}



    return (
        <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;