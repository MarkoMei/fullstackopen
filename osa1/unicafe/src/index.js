import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.clickHyva = this.clickHyva.bind(this);
    this.clickNeutraali = this.clickNeutraali.bind(this);
    this.clickHuono = this.clickHuono.bind(this);
    this.state = {
      palauteHyvä: 0,
      palauteNeutraali: 0,
      palauteHuono: 0
    }
  }

  componentDidMount() {
    console.log("componentDidMount()")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()")
  }

  clickHyva() {
    this.setState({palauteHyvä : this.state.palauteHyvä + 1})
  }

  clickNeutraali() {
    this.setState({palauteNeutraali : this.state.palauteNeutraali + 1})
  }

  clickHuono() {
    this.setState({palauteHuono : this.state.palauteHuono + 1})
  }

  keskiarvo() {
    let sum = this.state.palauteHuono + this.state.palauteNeutraali + this.state.palauteHyvä;
    if (sum > 0) {
      return (((this.state.palauteHuono * -1.0) +
             (this.state.palauteNeutraali * 0.0) +
             (this.state.palauteHyvä * 1.0)) / sum).toPrecision(2);
    }
    return "-";
  }

  positiivisia() {
    let sum = this.state.palauteHuono + this.state.palauteNeutraali + this.state.palauteHyvä;
    if (sum > 0) {
      return (100.0 * this.state.palauteHyvä / sum).toFixed(1) + "%"
    }
    return "-";
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
        <div>keskiarvo: {this.keskiarvo()}</div>
        <div>positiivisia: {this.positiivisia()}</div>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))