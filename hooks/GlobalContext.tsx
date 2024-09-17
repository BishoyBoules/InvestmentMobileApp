import { createContext, useState, useContext, ReactNode } from 'react'

interface GlobalContextType {
  goalName: string
  initialGoalAmount: number
  goalDeadline: string
  selectedPortfolio: string
  paymentRecurrence: number
  setSelectedPortfolio: (portfolio: string) => void
}

const defaultContextValue: GlobalContextType = {
  goalName: '',
  initialGoalAmount: 0,
  goalDeadline: '',
  selectedPortfolio: '',
  setSelectedPortfolio: () => {},
  paymentRecurrence: 0
}

const GlobalContext = createContext<GlobalContextType>(defaultContextValue)

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [goalName, setGoalName] = useState<string>(defaultContextValue.goalName)
  const [initialGoalAmount, setInitialGoalAmount] = useState<number>(
    defaultContextValue.initialGoalAmount
  )
  const [goalDeadline, setGoalDeadline] = useState<string>(
    defaultContextValue.goalDeadline
  )
  const [paymentRecurrence, setPaymentRecurrence] = useState<number>(
    defaultContextValue.paymentRecurrence
  )
  const [selectedPortfolio, setSelectedPortfolio] = useState<string>(
    defaultContextValue.selectedPortfolio
  )

  const value = {
    goalName,
    initialGoalAmount,
    goalDeadline,
    selectedPortfolio,
    paymentRecurrence,
    setSelectedPortfolio
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
