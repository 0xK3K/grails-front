import { configureStore } from '@reduxjs/toolkit'
import { AppSlice } from './appSlice'

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type StoreDispatch = typeof store.dispatch
