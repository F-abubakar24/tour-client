import { createContext } from "react";
import useFirebase from "../components/hooks/useFirebase";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
