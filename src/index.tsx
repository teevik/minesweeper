import { configure } from "mobx"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./containers"

configure({ enforceActions: "always" })

ReactDOM.render(<App />, document.getElementById("root"))
