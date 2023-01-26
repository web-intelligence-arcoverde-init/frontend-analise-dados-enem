import { Link } from 'react-router-dom'
import LinkButtom from '../../atomics/LinkButtom'
import styles from './ContainerLeftInfos.module.css'
import { useLocation } from 'react-router-dom'

export default function LeftInfos(): JSX.Element {
    const { state: { data } } = useLocation()
    console.log(data)

    return (
        <div className={styles.leftInformations}>
            <div className={styles.box}>
                <span>O que são as compeênticas da Redação?</span>
                <LinkButtom to="" label="Saiba mais" translateY="25px" height={45}/>
            </div>
            <LinkButtom to="/" label="Voltar" height={45}/>
        </div>
    )
}