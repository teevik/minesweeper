import { createContext, useContext } from "react"

export function createStoreProvider<T>(storeClass: new () => T) {
  const storeContext = createContext<T | null>(null)

  let defaultStoreInstance: T | null = null
  const getDefaultStoreInstance = () => {
    if (defaultStoreInstance) return defaultStoreInstance

    defaultStoreInstance = new storeClass()
    return defaultStoreInstance
  }

  const useStore = () => {
    const store = useContext(storeContext) || getDefaultStoreInstance()
    return store
  }

  return [useStore, storeContext.Provider, storeContext.Consumer] as const
}
