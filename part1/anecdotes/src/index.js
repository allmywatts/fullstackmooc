import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App, { anecdotes } from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
)
