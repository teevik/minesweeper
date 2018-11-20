import { action, computed, observable } from "mobx"
import { SquareModel } from "../models"
import { Dimensions } from "../types"

export type GameState = "stopped" | "started"

class GameStore {
  @observable
  private state: GameState = "stopped"

  @observable
  public minefield: SquareModel[] = []

  public width = 0
  public height = 0

  public setDimensions(dimensions: Dimensions) {
    this.width = dimensions.width
    this.height = dimensions.height
  }

  @action
  public onStartGame() {
    const minefield: SquareModel[][] = []

    for (let i = 0; i < this.height; i++) {
      const row: SquareModel[] = []
      minefield.push(row)

      for (let j = 0; j < this.width; j++) {
        const square = new SquareModel(Math.random() >= 0.9)
        row.push(square)
      }
    }

    for (let i = 0; i < this.height; i++) {
      const row = minefield[i]
      for (let j = 0; j < this.width; j++) {
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

    this.minefield = minefield.flat()
    this.state = "started"
  }

  @action
  public onStopGame() {
    this.state = "stopped"
  }

  @computed
  public get hasStarted() {
    return this.state === "started"
  }

  @computed
  public get hasStopped() {
    return this.state === "stopped"
  }

  @computed
  public get hasWon() {
    return this.minefield.every(square =>
      square.hasBomb ? square.isFlagged : square.isOpened
    )
  }

  @computed
  public get hasLost() {
    return this.minefield.some(square => square.isExploded)
  }

  @computed
  public get gameEnded() {
    return this.hasWon || this.hasLost
  }

  @computed
  public get bombAmount() {
    return this.minefield.filter(square => square.hasBomb).length
  }

  @computed
  public get flaggedAmount() {
    return this.minefield.filter(square => square.isFlagged).length
  }
}

export const gameStore = new GameStore()
