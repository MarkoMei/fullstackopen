import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      palauteHyvä: 0,
      palauteNeutraali: 0,
      palauteHuono: 0
    }
  }

  clickHyva = () => {
    this.setState({palauteHyvä : this.state.palauteHyvä + 1})
  }

  clickNeutraali = () => {
    this.setState({palauteNeutraali : this.state.palauteNeutraali + 1})
  }

  clickHuono = () => {
    this.setState({palauteHuono : this.state.palauteHuono + 1})
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={this.clickHyva}>hyvä</button>
        <button onClick={this.clickNeutraali}>neutraali</button>
        <button onClick={this.clickHuono}>huono</button>
        <h2>Statistiikka</h2>
        <div>hyvä: {this.state.palauteHyvä}</div>
        <div>neutraali: {this.state.palauteNeutraali}</div>
        <div>huono: {this.state.palauteHuono}</div>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))