//@ts-ignore
import styles from './HeatMap.module.css'
import Header from 'src/components/PageCharts/organisms/Header'
import { HeatTable } from 'src/components'
import { RightInfos } from 'src/components/PageHeatMap/organisms/RightInfos/RightInfos'

export const HeatMap = () => {
  return (
    <>
      <Header label="Mapa de Calor" />
      <main className={styles.main}>
        <div className={styles.heatMap}>
          <HeatTable />
        </div>
        <div className={styles.rightInfo}>
          <RightInfos />
        </div>
      </main>
    </>
  )
}
