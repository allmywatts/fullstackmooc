import React, { useState } from "react"
import "./App.css"

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
)

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>

const Votes = ({ votes }) => <p>Anecdote has {votes} votes.</p>

const BestAnecdote = ({ anecdote }) => <p>{anecdote}</p>

const App = ({ anecdotes }) => {
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const select = () => {
    const next = getRandomInt(anecdotes.length)
    setSelected(next)
  }

  const most = () => {
    const mostVotes = Math.max(...votes)
    const mostIdx = votes.indexOf(mostVotes)
    return anecdotes[mostIdx]
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button clickHandler={vote} text="vote" />
      <Button clickHandler={select} text="next" />
      <h1>Anecdote with most votes</h1>
      <BestAnecdote anecdote={most()} />
    </div>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

export { anecdotes }
export default App
