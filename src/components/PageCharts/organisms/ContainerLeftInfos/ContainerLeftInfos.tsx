import LinkButtom from '../../atomics/LinkButtom'

//@ts-ignore
import styles from './ContainerLeftInfos.module.css'

export default function LeftInfos(): JSX.Element {
  return (
    <div className={styles.leftInformations}>
      <LinkButtom to="/" label="Voltar" height={45} />
    </div>
  )
}
