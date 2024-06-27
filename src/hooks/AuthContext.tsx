import React, { createContext, useState, Dispatch, useContext, SetStateAction, FC, ReactNode } from 'react'

type AuthContextProps = {
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextProps>({
	isAuth: false,
	setIsAuth: () => {}
})

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
