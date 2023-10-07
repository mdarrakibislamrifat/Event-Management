import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth=getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
        
        
    }

    useEffect(()=>{

       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user on the current user',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


  const authInfo = {
    user,createUser,logOut,signIn,loading,googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
