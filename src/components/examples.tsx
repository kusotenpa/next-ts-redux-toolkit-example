import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { RootState } from '../../store'
import Clock from './clock'
import Counter from './counter'

const clockSelector = (state: RootState) => ({
  lastUpdate: state.counter.lastUpdate,
})

function Examples() {
  const { lastUpdate } = useSelector(clockSelector, shallowEqual)

  return (
    <div>
      <Clock lastUpdate={lastUpdate} />
      <Counter />
    </div>
  )
}

export default Examples
