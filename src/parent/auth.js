import {createContext,useContext} from "react";

export const AuthContext=createContext();

export function UseAuth(){
    return useContext(AuthContext);
}


export default UseAuth;





