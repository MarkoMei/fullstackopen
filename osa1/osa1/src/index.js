import React from 'react'
import ReactDOM from 'react-dom'

/*
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
*/

/*
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
} */

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

 class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  /* palauttaa funktion */
  asetaArvoon = (arvo) => {
    return () => {
      this.setState({ counter: arvo })
    }
  }

  kasvataYhdella = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  vahennaYhdella = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  nollaa = () => {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div>
        <Display counter={this.state.counter} />
        <div>
          <Button handleClick={() => this.kasvataYhdella()} text="+1" />
          <Button handleClick={() => this.vahennaYhdella()} text="-1" />
          <Button handleClick={() => this.nollaa()} text="0" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
