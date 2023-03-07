import styles from './style.css'
import {
  CompetenceChart,
  SkillsChart,
  SkillsHighestPercentageSuccessesChart,
} from 'src/components'
import Header from 'src/components/PageCharts/organisms/Header'
import LeftInfos from 'src/components/PageCharts/organisms/ContainerLeftInfos/ContainerLeftInfos'
import ContainerChooseAnSkill from 'src/components/PageCharts/organisms/ContainerChooseAnSkill/ContainerChooseAnSkill'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Charts = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const localStorate = localStorage.getItem('data')

    if (!localStorate) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Header label="Gráficos Analíticos" />
      <main className={styles.main}>
        <LeftInfos />
        <div className={styles.essay}>
          <SkillsChart />
        </div>
        <div className={styles.skills}>
          <CompetenceChart />
        </div>

        <div className={styles.highestPercent}>
          <div>
            <h2>Top 5 habilidades com mais acertos</h2>
          </div>

          <SkillsHighestPercentageSuccessesChart />
        </div>

        <ContainerChooseAnSkill />
      </main>
    </>
  )
}
