import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)
export const AuthProvider =({children})=>{
    const [user ,setUser] =useState(localStorage.getItem('user'));
    const chekLoggedIn =(user)=>{
        localStorage.setItem('user',user)
    }
    
    const login =(user)=>{
        chekLoggedIn(user)
        setUser(user)
    }
    
    const logout =()=>{
        setUser(null)
    }
    
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=>{
    return useContext(AuthContext)
}