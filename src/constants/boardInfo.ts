import { BoardInfo } from "../types/BoardInfo"

export const boardInfo: Record<string, BoardInfo> = {
  beginner: { width: 9, height: 9, bombAmount: 10 },
  advanced: { width: 16, height: 16, bombAmount: 40 },
  expert: { width: 30, height: 16, bombAmount: 99 }
}
