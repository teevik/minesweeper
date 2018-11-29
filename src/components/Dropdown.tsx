import * as React from "react"
import * as AriaMenubutton from "react-aria-menubutton"
import styled from "styled-components"
import { Button } from "../components"
import { ChevronDown } from "../icons"
import { DropdownEntry } from "../types"
import * as S from "./styles"

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
      <S.Dropdown.MenuItem key={entry.value} value={entry.value}>
        {entry.content}
      </S.Dropdown.MenuItem>
    )
  })

  return (
    <div>
      <S.Dropdown.Wrapper onSelection={handleSelection}>
        <S.Dropdown.MenuButton tag="button">
          {selectedEntry.content}
          <S.Dropdown.Icon>
            <ChevronDown />
          </S.Dropdown.Icon>
        </S.Dropdown.MenuButton>
        <S.Dropdown.Menu>{menuItems}</S.Dropdown.Menu>
      </S.Dropdown.Wrapper>
    </div>
  )
}
