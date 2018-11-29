import * as React from "react"
import styled from "styled-components"
import * as S from "./styles"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = props => {
  return <S.Input {...props} />
}
