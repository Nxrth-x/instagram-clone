import React, { createContext, ReactNode, useState } from 'react'
import { iToken } from '../types'

interface iAuthContext {
  token: iToken | undefined
  setAuthToken: (token: iToken) => void
}

const AuthContext = createContext({} as iAuthContext)

type AuthContextProviderProps = {
  children: ReactNode
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [token, setToken] = useState<iToken>()

  const setAuthToken = (token: iToken) => setToken(token)

  return (
    <AuthContext.Provider
      value={{
        token,
        setAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
