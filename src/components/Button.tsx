import * as React from "react"
import * as S from "./styles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = props => {
  return <S.Button {...props} />
}
