import React from 'react'
import { AppContext as NextAppContext } from 'next/app'
import { EnhancedStore } from '@reduxjs/toolkit'

import { initializeStore } from '../store'

type AppContext = NextAppContext & {
  ctx: { store: EnhancedStore };
}

const __PRELOADED_STORE__ = '__PRELOADED_STORE__'

function getOrCreateStore(initialState?): EnhancedStore {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return initializeStore(initialState)
  }

  if (!window[ __PRELOADED_STORE__ ]) {
    window[ __PRELOADED_STORE__ ] = initializeStore(initialState)
  }

  return window[ __PRELOADED_STORE__ ]
}

export default (App: any) => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext: AppContext) {
      const store = getOrCreateStore()
      let appProps = {}

      appContext.ctx.store = store

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialState: store.getState(),
      }
    }

    store: EnhancedStore

    constructor(props) {
      super(props)
      this.store = getOrCreateStore(props.initialState)
    }

    render() {
      return <App {...this.props} store={this.store} />
    }
  }
}
