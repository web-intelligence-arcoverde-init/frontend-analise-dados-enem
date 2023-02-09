import styles from './Competences.module.css'
import { useLocation } from 'react-router-dom'
import Header from 'src/components/PageCharts/organisms/Header'
import LeftInfos from 'src/components/PageCompetences/organisms/ContainerLeftInfos/ContainerLeftInfos'
import { CompetenceChart } from 'src/components'
import ContainerChooseAnCompetence from 'src/components/PageCompetences/organisms/ContainerChooseAnCompetence/ContainerChooseAnCompetence'

export const Competence = (): JSX.Element => {


  const data = JSON.parse(localStorage.getItem("data"))
  console.log(data)

  return (
    <>
      <Header label="Gráficos Analíticos - Competências" />
      <main className={styles.main}>
        <LeftInfos />
        <div className={styles.competenceChart}>
          <CompetenceChart />
        </div>
        <ContainerChooseAnCompetence />
      </main>
    </>
  )
}
