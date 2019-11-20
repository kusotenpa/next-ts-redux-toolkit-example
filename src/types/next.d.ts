import { EnhancedStore } from '@reduxjs/toolkit'

declare module 'next' {
  interface NextPageContext {
    store: EnhancedStore;
  }
}
