import React, { useState } from "react"
import "./App.css"

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Statistic = ({ text, value }) => {
  return (
    <>
      {text} {value}
      <br></br>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>statistics</h1>
      <p>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </p>
    </div>
  )
}

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
