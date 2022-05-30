import { configureStore } from '@reduxjs/toolkit'
import anedoteReducer from './reducers/anecdoteReducer'

export const store = configureStore({
  reducer: anedoteReducer
})
