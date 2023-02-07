import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    iUsersContext,
    iUsersProvider,
} from "../types/UsersContextTypes";

export const UserContext = createContext({} as iUsersContext);

export const UsersProvider = ({ children }: iUsersProvider) => {
    const navigate = useNavigate();
    const logoutDashboard: () => void = () => {
        navigate("/");
    };

    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider
            value={{
                loading,
                setLoading,
                logoutDashboard,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
