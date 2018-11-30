import * as React from "react"
import { Input } from "."
import { NumberInputProps } from "../types"

const getValidNumber = (value: string) => parseInt(value) || 0

export const NumberInput = (props: NumberInputProps) => {
  const { value, setValue } = props

  const [isInputting, setIsInputting] = React.useState(false)
  const [rawValue, setRawValue] = React.useState("")

  const flushRawChanges = () => {
    if (isInputting) {
      setIsInputting(false)
      setValue(getValidNumber(rawValue))
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputting(true)
    setRawValue(event.target.value)
  }

  const onBlur = () => {
    flushRawChanges()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event

    let changeAmount = event.shiftKey ? 10 : 1

    const handlers: Record<string, () => number> = {
      ArrowUp: () => value + changeAmount,
      ArrowDown: () => value - changeAmount
    }

    const handler = handlers[key]
    if (!handler) return

    event.preventDefault()
    flushRawChanges()
    setValue(handler())
  }

  return (
    <Input
      type="text"
      value={isInputting ? rawValue : value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  )
}
