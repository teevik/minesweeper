import * as React from "react"
import * as S from "./styles"

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = (props: LabelProps) => {
  return <S.Label {...props} />
}
