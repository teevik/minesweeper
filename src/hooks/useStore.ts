import { useMemo } from "react"

export const useStore = <StoreType>(storeClass: new () => StoreType) => {
  const store = useMemo(() => new storeClass(), [storeClass])

  return store
}
