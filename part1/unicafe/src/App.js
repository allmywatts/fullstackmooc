import React, { useState } from "react"
import "./App.css"

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h1>statistics</h1>
    <p>
      Good {good}
      <br></br>
      Neutral {neutral}
      <br></br>
      Bad {bad}
    </p>
  </div>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => setGood(good + 1)
  const incNeutral = () => setNeutral(neutral + 1)
  const incBad = () => setBad(bad + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={incGood} text="Good" />
      <Button onClick={incNeutral} text="Neutral" />
      <Button onClick={incBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
