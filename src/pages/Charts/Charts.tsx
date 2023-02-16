import styles from './charts.module.css'
import {
  CompetenceChart,
  EssayChart,
  SkillsChart,
  SkillsHighestPercentageSuccessesChart,
} from 'src/components'
import Header from 'src/components/PageCharts/organisms/Header'
import LeftInfos from 'src/components/PageCharts/organisms/ContainerLeftInfos/ContainerLeftInfos'
import ContainerChooseAnSkill from 'src/components/PageCharts/organisms/ContainerChooseAnSkill/ContainerChooseAnSkill'

import { LinkButton } from 'src/components'

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
          <CompetenceChart />
        </div>
        <div className={styles.skills}>
          <SkillsChart />
        </div>

        <div className={styles.highestPercent}>
          <div>
            <h3>Habilidades com maior percentual de acertos</h3>
          </div>

          <SkillsHighestPercentageSuccessesChart />
        </div>

        <ContainerChooseAnSkill />
      </main>
    </>
  )
}
