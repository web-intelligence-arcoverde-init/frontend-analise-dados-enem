import styles from './HeatTable.module.css'

const fakeData = [
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
  {
    habilities: 1,
    nQuestions: 2,
    nHits: '33%',
    errors: 4,
    nPercentHits: '5%',
  },
]

export const HeatTable = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className="tdRow">
            <th rowSpan={3}>Habilidades</th>
            <th colSpan={3}>Linguagens, códigos e suas tecnologias</th>
            <th>Nordeste</th>
          </tr>
          <tr>
            <th>Nº Questões</th>
            <th>Acerto</th>
            <th>Erros</th>
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
                  <td>{td.nPercentHits}</td>
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
