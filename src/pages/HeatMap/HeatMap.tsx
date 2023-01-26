import styles from './HeatMap.module.css'
import Header from 'src/components/PageCharts/organisms/Header'
import { HeatTable } from 'src/components'

export const HeatMap = () => {
  return (
    <>
      <Header label="Mapa de calor" />
      <main className={styles.main}>
        <div className={styles.heatMap}>
          <HeatTable />
        </div>
        <div className={styles.rightInfo}>
          
        </div>
      </main>
    </>
  )
}
