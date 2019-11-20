import NextApp from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { EnhancedStore } from '@reduxjs/toolkit'

import withReduxStore from '../lib/with-redux-store'

type Props = {
  store: EnhancedStore;
}

class App extends NextApp<Props> {
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(App)
