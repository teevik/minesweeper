import * as React from "react"
import * as AriaMenubutton from "react-aria-menubutton"
import styled from "styled-components"
import { Button } from "../components"
import { ChevronDown } from "../icons"
import { DropdownEntry } from "../types"

interface DropdownProps {
  entries: DropdownEntry[]
  selectedEntry: DropdownEntry
  onEntryChange: (entry: DropdownEntry) => void
}

export const Dropdown: React.FC<DropdownProps> = props => {
  const { entries, selectedEntry, onEntryChange } = props

  const handleSelection = (value: any) => {
    const newEntry = entries.find(entry => entry.value === value)!
    onEntryChange(newEntry)
  }

  const menuItems = entries.map(entry => {
    return (
      <MenuItem key={entry.value} value={entry.value}>
        {entry.content}
      </MenuItem>
    )
  })

  return (
    <div>
      <Wrapper onSelection={handleSelection}>
        <MenuButton tag="button">
          {selectedEntry.content}
          <Icon>
            <ChevronDown />
          </Icon>
        </MenuButton>
        <Menu>{menuItems}</Menu>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled(AriaMenubutton.Wrapper)`
  position: relative;
`

const Menu = styled(AriaMenubutton.Menu)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
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
  color: rgba(105, 108, 163, 0.73);
  text-align: right;
  background-color: #0b0c1e;
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

const MenuButton = Button.withComponent(AriaMenubutton.Button)

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`
