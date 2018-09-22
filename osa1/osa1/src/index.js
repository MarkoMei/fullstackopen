import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    const addition = props.age > 50 ? "fart" : "";
    return (
      <div>
        <p>Hello {props.name}, you are {props.age} years old {addition}</p>
      </div>
    )
  }
  
  const App = () => {
    const nimi = 'Pekka'
    const ika = 10
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Arto" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        <Hello name="Petro" age={5*11} />
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))