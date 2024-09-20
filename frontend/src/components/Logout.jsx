import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

function Logout(){

const {LogoutAadmin} = useAuth()

    useEffect(()=>{
        LogoutAadmin()
    },[LogoutAadmin])

    return <Navigate to='/' />
}

export default Logout