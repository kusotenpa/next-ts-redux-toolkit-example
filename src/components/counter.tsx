import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import { actions as counterActions } from '../modules/counter'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()
  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())
  const reset = () => dispatch(counterActions.reset())

  return (
    <div>
      <h1>
        Count:
        <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
