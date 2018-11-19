import { Button } from "components"
import { action } from "mobx"
import { useObservable } from "mobx-react-lite"
import * as React from "react"
import { useState } from "react"
import * as AriaMenubutton from "react-aria-menubutton"
import styled from "styled-components"
import { DropdownEntry } from "types"

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
    if (entry.value === selectedEntry.value) return null

    return (
      <MenuItem key={entry.value} value={entry.value}>
        {entry.content}
      </MenuItem>
    )
  })

  return (
    <div>
      <Wrapper onSelection={handleSelection}>
        <MenuButton tag="button">{selectedEntry.content}</MenuButton>
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
`

const MenuItem = Button.withComponent(AriaMenubutton.MenuItem)

const MenuButton = Button.withComponent(AriaMenubutton.Button)
