import { useCallback, useState } from "react"

type UseNumberInputReturnType = [
  React.AllHTMLAttributes<HTMLInputElement>,
  number
]

export const useNumberInput = (
  defaultValue: number
): UseNumberInputReturnType => {
  const [stringValue, changeStringValue] = useState(defaultValue.toString())

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    changeStringValue(value.replace(/\D/, ""))
  }, [])

  const numberValue = parseInt(stringValue) || defaultValue

  return [{ value: stringValue, onChange }, numberValue]
}
