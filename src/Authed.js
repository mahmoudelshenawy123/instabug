import { Navigate } from "react-router"
import { useAuth } from "./auth"


export const Authed =({children})=>{
    const auth =useAuth()
    if(auth.user){
        console.log(auth.user)
        return <Navigate to='/Welcome'/>
    }
    return children
}