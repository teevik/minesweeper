import * as React from "react"
import * as S from "./styles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  return <S.Button {...props} />
}
