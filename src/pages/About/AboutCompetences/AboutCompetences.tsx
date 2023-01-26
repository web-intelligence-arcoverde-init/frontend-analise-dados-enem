import styles from './AboutCompetences.module.css'
import LinkButtom from 'src/components/PageCharts/atomics/LinkButtom'
import Header from 'src/components/PageCharts/organisms/Header'

export const AboutCompetences = () => {
  return (
    <>
      <Header label="Competências" />
      <main className={styles.mainContainer}>
        <h1 className={styles.title}>O que são competências?</h1>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nesciunt, aperiam quas praesentium commodi amet voluptate ullam
            maxime dicta voluptatibus, ipsum debitis assumenda ipsam illo
            dolore, veritatis deserunt voluptatem. Ratione. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Itaque nesciunt, aperiam quas
            praesentium commodi amet voluptate ullam maxime dicta voluptatibus,
            ipsum debitis assumenda ipsam illo dolore, veritatis deserunt
            voluptatem. Ratione.
          </div>
          <LinkButtom to="/" label="Voltar" height={45} translateY="20px" />
        </div>
      </main>
    </>
  )
}
