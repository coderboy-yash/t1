import { createContext, useContext } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children, value }) => {
    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserDataContext = () => {
    const value = useContext(UserDataContext);
    return value;
};
