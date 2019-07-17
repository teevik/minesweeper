import * as AriaMenubutton from "react-aria-menubutton"
import styled from "styled-components"
import * as S from "."

const Wrapper = styled(AriaMenubutton.Wrapper)`
  position: relative;
  display: flex;
`

const Menu = styled(AriaMenubutton.Menu)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`

const MenuItem = styled(AriaMenubutton.MenuItem)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(104, 107, 171, 0.8);
  text-align: right;
  background-color: #080810;
  outline: none !important;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0e1028;
  }

  &:active {
    background-color: #0c0d22;
  }
`

const MenuButton = S.Button.withComponent(AriaMenubutton.Button)

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  margin-left: auto;
`
export const Dropdown = {
  Wrapper,
  Menu,
  MenuItem,
  MenuButton,
  Icon
}
