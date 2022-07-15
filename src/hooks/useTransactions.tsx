import { createContext, useContext } from "react";
import { useState, useEffect, ReactNode } from 'react'
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionsProvider = function ({ children } : TransactionsProviderProps) {
  const [transactions, setTransactions ] = useState<Transaction[]>([])
  useEffect(()=> {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  },[])
  async function createTransaction(TransactionInput: TransactionInput) {
    const response =  await api.post('/transactions', {
      ...TransactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }
  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}
export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}