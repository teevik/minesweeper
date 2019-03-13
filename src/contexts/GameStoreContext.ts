import { createContext } from "react"
import { GameStore } from "../stores"

export const GameStoreContext = createContext<GameStore>(undefined as any)
