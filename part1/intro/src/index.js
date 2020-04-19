import React, { useState } from "react"
import ReactDOM from "react-dom"

const DateNow = (props) => <p>The time is {props.now.toString()}</p>

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>You were probably born in {bornYear()}.</p>
    </div>
  )
}

const Display = (props) => {
  const { left, right } = props.clicks
  return (
    <div>
      <p>Left: {left}</p>
      <p>Right: {right}</p>
    </div>
  )
}

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by clicking buttons</div>
  }
  return <div>All clicks: {allClicks.join(", ")}</div>
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setAllClicks([...allClicks, "L"])
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    })
  }

  const handleRightClick = () => {
    setAllClicks([...allClicks, "R"])
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    })
  }

  const resetClicks = () => {
    setClicks({ left: 0, right: 0 })
    setAllClicks([])
  }

  return (
    <>
      <Display clicks={clicks} />
      <History allClicks={allClicks} />
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      <Button handleClick={resetClicks} text="Reset" />
      <Hello name="Satan" age={666} />
      <DateNow now={new Date()} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
