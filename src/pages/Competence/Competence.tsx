import styles from './Competence.module.css'
import { useLocation } from 'react-router-dom'
import Header from '../Charts/organisms/Header'
import LeftInfos from './organisms/ContainerLeftInfos/ContainerLeftInfos'
import { CompetenceChart } from 'src/components'
import ContainerChooseAnCompetence from './organisms/ContainerChooseAnCompetence/ContainerChooseAnCompetence'

export const Competence = (): JSX.Element => {
    const { state: { data } } = useLocation()

    console.log(data)

    return (
        <>
            <Header label="Gráficos Analíticos"/>
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