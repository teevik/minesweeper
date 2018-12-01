import * as React from "react"
import styled from "styled-components"

export const FlagIcon = () => {
  return (
    <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22">
      <g transform="translate(-3 -1)">
        <Flag d="M4,15s1-1,4-1,5,2,8,2,4-1,4-1V3s-1,1-4,1S11,2,8,2,4,3,4,3Z" />
        <Pole y1="7" transform="translate(4 15)" />
      </g>
    </Wrapper>
  )
}

const Wrapper = styled.svg`
  width: 16px;
`

const Flag = styled.path`
  fill: #5258d4;
  stroke: #1f2356;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
`

const Pole = styled.line`
  fill: none;
  stroke: #1f2356;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
`
