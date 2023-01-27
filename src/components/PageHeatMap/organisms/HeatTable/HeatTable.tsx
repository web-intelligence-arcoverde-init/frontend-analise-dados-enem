import styles from './HeatTable.module.css'

const fakeData = [
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '51.3%',
    nPercentNordeste: '23.8%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '35.8%',
    nPercentNordeste: '23%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '19%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '15%',
    nPercentNordeste: '29%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '30%',
    nPercentNordeste: '40%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '35%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '8%',
    nPercentNordeste: '49%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '23%',
    nPercentNordeste: '29%',
  },
]

export const HeatTable = () => {
  const applyColor = (value: string) => {
    // essa função aplica a cor da célual da tabela

    // remove %, troca , por . e formata para float (pois é uma string)
    const formatedValue = parseFloat(
      value.replace('%', '').replace(",", ".")
    )

    const heatColors = [
      { color: '#ffcdd2', min: 40, max: 54 },
      { color: '#ef9a9a', min: 30, max: 40 },
      { color: '#e57373', min: 20, max: 30 },
      { color: '#e53935', min: 10, max: 20 },
      { color: '#ea0909', min: 0, max: 10},
    ]

    let color
    for(let i = 0; i < heatColors.length; i++) {
      if (formatedValue >= heatColors[i].min && formatedValue <= heatColors[i].max) {
        color = heatColors[i].color
        break
      } else {
        color = 'white'
      }
    }

    return color
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className="tdRow">
            <th rowSpan={3}>Habilidades</th>
            <th colSpan={4}>Linguagens, códigos e suas tecnologias</th>
            <th>Nordeste</th>
          </tr>
          <tr>
            <th>Nº Questões</th>
            <th>Acerto</th>
            <th>Erros</th>
            <th>% de Acerto</th>
            <th>% de Acerto</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((td, i) => {
            if (i <= 30) {
              return (
                <tr>
                  <td>{td.habilities}</td>
                  <td>{td.nQuestions}</td>
                  <td>{td.nHits}</td>
                  <td>{td.errors}</td>
                  <td
                    style={{
                      backgroundColor: `${applyColor(td.nPercentHits)}`,
                    }}
                  >
                    {td.nPercentHits}
                  </td>
                  <td
                    style={{
                      backgroundColor: `${applyColor(td.nPercentNordeste)}`,
                    }}
                  >
                    {td.nPercentNordeste}
                  </td>
                </tr>
              )
            } else {
              return false
            }
          })}
        </tbody>
      </table>
    </div>
  )
}
