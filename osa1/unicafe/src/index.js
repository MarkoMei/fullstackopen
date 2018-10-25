import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({label, text}) => (
  <div>{label}: {text}</div>
)

class Statistics extends React.Component {

  keskiarvo() {
    let sum = this.palautteetSumma();
    if (sum > 0) {
      return (((this.props.valueHuono * -1.0) +
             (this.props.valueNeutraali * 0.0) +
             (this.props.valueHyva * 1.0)) / sum).toPrecision(2);
    }
    return "-";
  }

  palautteetSumma() {
    return parseInt(this.props.valueHyva) + parseInt(this.props.valueNeutraali) + parseInt(this.props.valueHuono);
  }

  positiivisia() {
    let sum = this.palautteetSumma();
    if (sum > 0) {
      return (100.0 * this.props.valueHyva / sum).toFixed(1) + "%"
    }
    return "-";
  }

  render() {
    return (
      <div>
        <h2>{this.props.label}</h2>
        {this.palautteetSumma() < 1 ? (
          <p>Ei annettuja palautteita.</p>
        ) : (
          <div>
          <Statistic label="hyvä" text={this.props.valueHyva} />
          <Statistic label="neutraali" text={this.props.valueNeutraali} />
          <Statistic label="huono" text={this.props.valueHuono} />
          <Statistic label="keskiarvo" text={this.keskiarvo()} />
          <Statistic label="positiivisia" text={this.positiivisia()} />
          </div>
        )}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
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

  clickPalaute = (valinta) => {
    this.setState({['palaute' + valinta] : this.state['palaute' + valinta] + 1})
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button handleClick={() => this.clickPalaute('Hyvä')} text="hyvä" />
        <Button handleClick={() => this.clickPalaute('Neutraali')} text="neutraali" />
        <Button handleClick={() => this.clickPalaute('Huono')} text="huono" />
        <Statistics label="Statistiikka" valueHyva={this.state.palauteHyvä} valueNeutraali={this.state.palauteNeutraali}
          valueHuono={this.state.palauteHuono} />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))