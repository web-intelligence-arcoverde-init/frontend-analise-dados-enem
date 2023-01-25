import styles from './Charts.module.css'
import { useLocation } from 'react-router-dom'
import {
    CompetenceChart, EssayChart,
    SkillsChart,
    SkillsHighestPercentageSuccessesChart
} from '../../components'
import Header from './organisms/Header'
import LeftInfos from './organisms/ContainerLeftInfos/ContainerLeftInfos'
import ContainerChooseAnSkill from './organisms/ContainerChooseAnSkill/ContainerChooseAnSkill'
import LinkButtom from './atomics/LinkButtom'
export const Charts = () => {
    // recebe os dados vindo na propiedade "state" do component Link
    const { state: { data } } = useLocation()

    return (
        <>
           <Header label="Gráficos Analíticos" />
            <main className={styles.main}>
                <LeftInfos/>
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
                    <LinkButtom to="/competence" label="Competências" height={30} state={data}/>
                </div>
               <ContainerChooseAnSkill/>
            </main>
        </>
    )
}