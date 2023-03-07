import LinkButtom from 'src/components/PageCharts/atomics/LinkButtom'
import Header from 'src/components/PageCharts/organisms/Header'
//@ts-ignore
import styles from './AboutHabilities.module.css'

export const AboutHabilities = () => {
  return (
    <>
      <Header label="Habilidades" />
      <main className={styles.mainContainer}>
        <h1 className={styles.title}>O que são habilidades?</h1>
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
