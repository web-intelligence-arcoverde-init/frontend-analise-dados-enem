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
      <main className={styles.main}>
        <div className={styles.essay}>
          {/* media de cada competencia do ENEM [correto] */}
          <EssayChart />
        </div>
        <div className={styles.skills}>
          {/* media de acertos de habilidades [correto] */}
          <SkillsChart />
        </div>

        {/* acertos e erros por habilidate [correto] */}
        <ContainerChooseAnSkill />
      </main>
    </>
  )
}

export const Example = () => {
  return (
    <>
      <Header label="Gráficos Analíticos" />
      <main className={styles.main}>
        <LeftInfos />
        <div className={styles.essay}>
          <EssayChart />
        </div>
        <div className={styles.skills}>
          <SkillsChart />
        </div>
        <div className={styles.highestPercent}>
          <SkillsHighestPercentageSuccessesChart />
        </div>
        <div className={styles.competence}>
          <CompetenceChart />
          <LinkButton to="/competence" label="Competências" height={30} />
        </div>
        <ContainerChooseAnSkill />
      </main>
    </>
  )
}
