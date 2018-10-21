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

const Statistics = ({label, valueHyva, valueNeutraali, valueHuono, keskiarvo, positiivisia}) => (
  <div>
    <h2>{label}</h2>
    <Statistic label="hyvä" text={valueHyva} />
    <Statistic label="neutraali" text={valueNeutraali} />
    <Statistic label="huono" text={valueHuono} />
    <Statistic label="keskiarvo" text={keskiarvo} />
    <Statistic label="positiivisia" text={positiivisia} />
  </div>
)


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

  clickHyva = () => {
    this.setState({palauteHyvä : this.state.palauteHyvä + 1})
  }

  clickNeutraali = () => {
    this.setState({palauteNeutraali : this.state.palauteNeutraali + 1})
  }

  clickHuono = () => {
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
        <Button handleClick={this.clickHyva} text="hyvä" />
        <Button handleClick={this.clickNeutraali} text="neutraali" />
        <Button handleClick={this.clickHuono} text="huono" />
        <Statistics label="Statistiikka" valueHyva={this.state.palauteHyvä} valueNeutraali={this.state.palauteNeutraali}
          valueHuono={this.state.palauteHuono} keskiarvo={this.keskiarvo()} positiivisia={this.positiivisia()} />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))