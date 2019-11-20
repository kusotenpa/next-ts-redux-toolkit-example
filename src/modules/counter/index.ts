import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lastUpdate: 0,
  count: 0,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    tick: draft => {
      draft.lastUpdate = Date.now()
    },
    increment: draft => {
      draft.count += 1
    },
    decrement: draft => {
      draft.count -= 1
    },
    reset: draft => {
      draft.count = initialState.count
    },
  },
})

const { actions, reducer } = slice

export default slice
export { actions, reducer }
