import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import Examples from '../src/components/examples'
import { actions as counterActions } from '../src/modules/counter'

const Page: NextPage = () => {
  const dispatch = useDispatch()
  const lastUpdate = useSelector((state: RootState) => {
    return state.counter.lastUpdate
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(counterActions.tick())
    }, 1000)

    return () => clearTimeout(timer)
  }, [lastUpdate])

  return (
    <Examples />
  )
}

Page.getInitialProps = async ctx => {
  const { store } = ctx

  store.dispatch(counterActions.tick())

  return {}
}

export default Page
