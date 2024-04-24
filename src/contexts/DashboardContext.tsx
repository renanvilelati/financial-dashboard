import { createContext, ReactNode, useContext } from "react";

interface iDashboardContext {
  texto: string
}

export const DashboardContext = createContext( {} as iDashboardContext)

export const DashboardContextProvider = ({children}: {children: ReactNode}) => {
  const texto = 'RENANNNN'
  
  return (
    <DashboardContext.Provider value={{texto}}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
