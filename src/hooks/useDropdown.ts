import { useState } from "react"
import { DropdownEntry } from "../types/DropdownEntry"

export const useDropdown = (entries: DropdownEntry[]) => {
  const [selectedEntry, setSelectedEntry] = useState(entries[0])

  const onEntryChange = (entry: DropdownEntry) => {
    setSelectedEntry(entry)
  }

  return { entries, selectedEntry, onEntryChange }
}
