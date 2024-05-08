'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

interface ContextProps {
  openSideBar: boolean
  setStateSideBar: Dispatch<SetStateAction<boolean>>
}

const defaultValue = {
  openSideBar: false,
  setStateSideBar: () => { },
}


export const StateContext = createContext<ContextProps>(defaultValue)

const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openSideBar, setStateSideBar] = useState<boolean>(false)

  return (
    <StateContext.Provider
      value={{ openSideBar, setStateSideBar }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider

export const useStateValue = () => useContext(StateContext);

