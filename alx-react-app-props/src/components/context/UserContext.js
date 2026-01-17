
import React,{createContext} from 'react'

export const Context = createContext()

const UserContext = ({ children }) => {
  return (
    <Context.Provider value={{ name: "Jane Doe", email: "jane.doe@example.com" }}>
      {children}
    </Context.Provider>
    
  )
}

export default UserContext