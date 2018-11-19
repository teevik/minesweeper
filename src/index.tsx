import { App } from "components"
import { configure } from "mobx"
import * as React from "react"
import * as ReactDOM from "react-dom"

configure({ enforceActions: "always" })

ReactDOM.render(<App />, document.getElementById("root"))
