import * as React from "react"
import * as S from "./styles"

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = props => {
  return <S.Label {...props} />
}
