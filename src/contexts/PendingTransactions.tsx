import { createContext, ReactNode, useEffect } from 'react'
import { useNetwork, useWaitForTransaction } from '@starknet-react/core'
import { useAppSelector, useDispatch } from '@/hooks'
import { toast } from '@/misc'
import { removePendingTransaction, selectPendingTransactions } from '@/store/appSlice'
import { Transaction } from '@/types'
import { TransactionStatus } from 'starknet'

interface PendingTransactionsContextState {}

export const PendingTransactionsContext = createContext<PendingTransactionsContextState>({})

const PendingTransaction = ({ pendingTransaction }: { pendingTransaction: Transaction }) => {
  const dispatch = useDispatch()
  const { data } = useWaitForTransaction({ hash: pendingTransaction.hash })
  const { chain } = useNetwork()

  useEffect(() => {
    if (data) {
      console.log(data)
      if ((data as { finality_status: TransactionStatus }).finality_status === TransactionStatus.ACCEPTED_ON_L2) {
        toast({
          action: pendingTransaction.action,
          chain,
          transactionHash: pendingTransaction.hash,
          type: 'success'
        })
        dispatch(removePendingTransaction({ hash: pendingTransaction.hash }))
      }
    }
  }, [chain, data, dispatch, pendingTransaction])

  return <div className='hidden' />
}

export const PendingTransactionsProvider = ({ children }: { children: ReactNode }) => {
  const pendingTransactions = useAppSelector(selectPendingTransactions)

  return (
    <PendingTransactionsContext.Provider value={{}}>
      {pendingTransactions.map((pendingTransaction, index) => (
        <PendingTransaction key={index} pendingTransaction={pendingTransaction} />
      ))}
      {children}
    </PendingTransactionsContext.Provider>
  )
}
