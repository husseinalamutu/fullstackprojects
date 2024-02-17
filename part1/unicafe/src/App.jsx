import { useState } from 'react'

// a proper place to define a component
const StatisticLine = ({ text, value }) => {
  return (
  <div>
    <table>
    <tbody>
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
    </tbody>
    </table>
  </div>
  )
  };

const Statistics = ({ good, neutral, bad, all, average, positive }) => (
  <div>
    <h1>statistics</h1>
    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <StatisticLine text="all" value ={all} />
    <StatisticLine text="average" value ={average} />
    <StatisticLine text="positive" value ={positive} />
  </div>
);
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad 
  const average = all/3
  const positive = (good/all) * 100 + " %"

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      {(all) === 0 ? (
      <p>No feedback given</p>
      ) : (
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      )}
    </div>
  )
}

export default App