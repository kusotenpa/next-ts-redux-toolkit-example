import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import counter from './src/modules/counter'

const reducer = combineReducers({
  counter: counter.reducer,
})

export const initializeStore = preloadedState => {
  const middleware = [...getDefaultMiddleware()]

  return configureStore({
    reducer,
    middleware,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof reducer>
