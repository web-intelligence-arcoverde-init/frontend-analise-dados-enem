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

export const Charts = () => {
  // recebe os dados vindo na propiedade "state" do component Link

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
        </div>
        <ContainerChooseAnSkill />
      </main>
    </>
  )
}
