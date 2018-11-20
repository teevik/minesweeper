import { action, computed, observable } from "mobx"
import { SquareState } from "../types"

export class SquareModel {
  public readonly hasBomb: boolean
  @observable public isFlagged = false
  @observable public state: SquareState = "closed"

  private neighbors!: SquareModel[]

  constructor(hasBomb: boolean) {
    this.hasBomb = hasBomb
  }

  public setNeighbors(neighbors: SquareModel[]) {
    this.neighbors = neighbors
  }

  @action
  public onOpen() {
    if (this.state === "opened") return

    const willExplode = this.hasBomb
    this.state = willExplode ? "exploded" : "opened"

    if (!willExplode && this.neighborsWithBomb === 0) {
      for (const neighbor of this.neighbors) {
        if (neighbor.state === "closed") neighbor.onOpen()
      }
    }
  }

  @action
  public toggleFlag() {
    this.isFlagged = !this.isFlagged
  }

  @computed
  public get neighborsWithBomb() {
    const neighbors = this.neighbors.filter(neighbor => neighbor.hasBomb)

    return neighbors.length
  }

  @computed
  public get isClosed() {
    return this.state === "closed"
  }

  @computed
  public get isOpened() {
    return this.state === "opened"
  }

  @computed
  public get isExploded() {
    return this.state === "exploded"
  }
}
