import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
    return (
      <div>
          <p>{props.kurssi1} {props.tehtavia1}</p>
          <p>{props.kurssi2} {props.tehtavia2}</p>
          <p>{props.kurssi3} {props.tehtavia3}</p>
      </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>Yhteensä {props.yhteensa} tehtävää</div>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi1={osa1} tehtavia1={tehtavia1} kurssi2={osa2} tehtavia2={tehtavia2}
        kurssi3={osa3} tehtavia3={tehtavia3} />
      <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)