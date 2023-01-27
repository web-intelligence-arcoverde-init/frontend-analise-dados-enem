import styles from './Charts.module.css'
import { useLocation } from 'react-router-dom'
import {
  CompetenceChart,
  EssayChart,
  SkillsChart,
  SkillsHighestPercentageSuccessesChart,
} from '../../components'
import Header from 'src/components/PageCharts/organisms/Header'
import LeftInfos from 'src/components/PageCharts/organisms/ContainerLeftInfos/ContainerLeftInfos'
import ContainerChooseAnSkill from 'src/components/PageCharts/organisms/ContainerChooseAnSkill/ContainerChooseAnSkill'
import LinkButtom from 'src/components/PageCharts/atomics/LinkButtom'
import { useEffect, useState } from 'react'

export const Charts = () => {
  // recebe os dados vindo na propiedade "state" do component Link
  const [ storage, setStorage ] = useState()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    setStorage(data)
  })

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
          <LinkButtom to="/competence" label="Competências" height={30} />
        </div>
        <ContainerChooseAnSkill />
      </main>
    </>
  )
}
