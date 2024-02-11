import { RootState } from '@/store/index'
import { Transaction } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  pendingTransactions: Array<Transaction>
}

interface AddPendingTransactionPayload {
  payload: Transaction
}

interface RemovePendingTransactionPayload {
  payload: Omit<Transaction, 'action'>
}

const initialState: AppState = {
  pendingTransactions: []
}

export const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    addPendingTransaction(state, { payload }: AddPendingTransactionPayload) {
      state.pendingTransactions.push(payload)
    },
    removePendingTransaction(state, { payload }: RemovePendingTransactionPayload) {
      const index = state.pendingTransactions.findIndex(({ hash }) => hash === payload.hash)
      state.pendingTransactions.splice(index, 1)
    }
  }
})

export const { addPendingTransaction, removePendingTransaction } = AppSlice.actions
export const selectPendingTransactions = (state: RootState) => state.app.pendingTransactions
export default AppSlice.reducer
