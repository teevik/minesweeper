import { action, computed, observable } from "mobx"
import { randomBetween } from "../helpers"
import { SquareModel } from "../models"
import { BoardInfo } from "../types"

export type GameState = "stopped" | "started"

interface Coordinates {
  x: number
  y: number
}

const containsCoordinates = (list: Coordinates[], { x, y }: Coordinates) => {
  const item = list.find(coordinate => coordinate.x === x && coordinate.y === y)

  return !!item
}

export class GameStore {
  @observable
  private state: GameState = "stopped"

  @observable
  public minefield: SquareModel[] = []

  public boardWidth = 0
  public boardHeight = 0
  public totalBombAmount = 0

  public setupGame(boardInfo: BoardInfo) {
    const { width, height, bombAmount } = boardInfo

    this.boardWidth = width
    this.boardHeight = height
    this.totalBombAmount = bombAmount
  }

  @action
  public onStartGame() {
    const minefield: SquareModel[][] = []

    const bombCoordinates: Coordinates[] = []

    for (let i = 0; i < this.totalBombAmount; i++) {
      const x = randomBetween(0, this.boardWidth - 1)
      const y = randomBetween(0, this.boardHeight - 1)

      if (containsCoordinates(bombCoordinates, { x, y })) i--

      bombCoordinates.push({ x, y })
    }

    for (let y = 0; y < this.boardHeight; y++) {
      const row: SquareModel[] = []
      minefield.push(row)

      for (let x = 0; x < this.boardWidth; x++) {
        let hasBomb = false

        if (
          bombCoordinates.find(
            bombCoordinate => bombCoordinate.x === x && bombCoordinate.y === y
          )
        ) {
          hasBomb = true
        }

        const square = new SquareModel(hasBomb)
        row.push(square)
      }
    }

    for (let y = 0; y < this.boardHeight; y++) {
      const row = minefield[y]
      for (let x = 0; x < this.boardWidth; x++) {
        const square = row[x]

        const neighbors: SquareModel[] = []

        for (let i = -1; i < 2; i++) {
          const row = minefield[y + i]
          if (!row) continue

          for (let j = -1; j < 2; j++) {
            const neighborSquare = row[x + j]
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
  public get gameHasEnded() {
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
