import { useCallback, useState } from "react"
import { DropdownEntry } from "../types"

export const useDropdown = (entries: DropdownEntry[]) => {
  const [selectedEntry, setSelectedEntry] = useState(entries[0])

  const onEntryChange = useCallback((entry: DropdownEntry) => {
    setSelectedEntry(entry)
  }, [])

  return { entries, selectedEntry, onEntryChange }
}
