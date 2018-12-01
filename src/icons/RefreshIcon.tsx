import * as React from "react"
import styled from "styled-components"

export const RefreshIcon = () => {
  return (
    <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.829 29.828">
      <g transform="translate(0 -1.94)">
        <Path d="M1,4v9.022h9.022" transform="translate(0 0.503)" />
        <Path d="M26.022,23.022V14H17" transform="translate(8.058 5.539)" />
        <Path d="M30.305,12.021A13.532,13.532,0,0,0,7.977,6.968L1,13.524m33.079,6.014L27.1,26.094A13.532,13.532,0,0,1,4.774,21.042" />
      </g>
    </Wrapper>
  )
}

const Wrapper = styled.svg`
  opacity: 0.83;
  height: 27px;
  width: 37px;
  margin-left: -5px;
`

const Path = styled.path`
  fill: none;
  stroke: #5258d4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
`
