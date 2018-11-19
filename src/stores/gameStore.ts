import { action, computed, observable } from "mobx"
import { SquareModel } from "models"
import { SquareState } from "types"

class GameStore {
  @observable
  public gameRunning = false
  @observable
  public minefield: SquareModel[][] = []

  public readonly width = 9
  public readonly height = 9

  constructor() {}

  @action
  public startGame() {
    const minefield: SquareModel[][] = []

    for (let i = 0; i < this.width; i++) {
      const row: SquareModel[] = []
      minefield.push(row)

      for (let j = 0; j < this.height; j++) {
        const square = new SquareModel(Math.random() >= 0.85)
        row.push(square)
      }
    }

    for (let i = 0; i < this.width; i++) {
      const row = minefield[i]
      for (let j = 0; j < this.height; j++) {
        const square = row[j]

        const neighbors: SquareModel[] = []

        for (let k = -1; k < 2; k++) {
          const row = minefield[i + k]
          if (!row) continue

          for (let l = -1; l < 2; l++) {
            const neighborSquare = row[j + l]
            if (neighborSquare === square) continue
            if (neighborSquare) neighbors.push(neighborSquare)
          }
        }

        square.setNeighbors(neighbors)
      }
    }

    this.minefield = minefield
    this.gameRunning = true
  }

  @action
  public stopGame() {
    this.minefield = []
    this.gameRunning = false
  }

  @computed
  public get mineHasExploded() {
    return this.minefield
      .flat()
      .some(square => square.state === SquareState.exploded)
  }

  @computed
  public get bombAmount() {
    return this.minefield.flat().filter(square => square.hasBomb).length
  }

  @computed
  public get flaggedAmount() {
    return this.minefield.flat().filter(square => square.isFlagged).length
  }
}

export const gameStore = new GameStore()
