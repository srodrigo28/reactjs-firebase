import { useStete, createContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import firebase from '../services/firebaseConnection'

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState(null); // {id: 1, nome: 'bastiao'}
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const storageUser = localStorage.getItem('SistemaUser');

        function loadStorage(){
            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }
    
            setLoading(false);
        }

        loadStorage();

    }, [])

    return(
        <AuthContext.Provider value={{ signed: !!user, user,loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider