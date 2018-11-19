import { Button } from "components"
import { action } from "mobx"
import { useObservable } from "mobx-react-lite"
import * as React from "react"
import { useState } from "react"
import * as AriaMenubutton from "react-aria-menubutton"
import styled from "styled-components"

export const Dropdown: React.FC = props => {
  const entries: { value: string; content: React.ReactNode }[] = [
    { value: "beginner", content: "Beginner - 9x9" },
    { value: "advanced", content: "Advanced - 16x16" },
    { value: "expert", content: "Expert - 16x30" }
  ]

  const [selectedKey, setSelectedKey] = useState(entries[0].value)
  const handleSelection = (value: any) => setSelectedKey(value)

  const selectedEntry = entries.find(entry => entry.value === selectedKey)
  if (!selectedEntry) throw new Error()

  const menuItems = entries.map(entry => {
    if (entry === selectedEntry) return null

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
