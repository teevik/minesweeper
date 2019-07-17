import * as React from "react"
import { NumberInputProps } from "../types/NumberInputProps"

interface UseNumberInputOptions {
  defaultValue: number
  min: number
  max: number
}

export const useNumberInput = (
  options: UseNumberInputOptions
): NumberInputProps => {
  const { min, max, defaultValue } = options

  const [value, _setValue] = React.useState(defaultValue)

  const setValue = (input: number) => {
    let actualInput = input

    if (input < min) actualInput = min
    if (input > max) actualInput = max

    _setValue(actualInput)
  }

  return { value, setValue }
}
