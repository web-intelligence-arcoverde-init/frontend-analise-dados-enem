import { Link } from 'react-router-dom'
import LinkButtom from '../../atomics/LinkButtom'
import styles from './ContainerLeftInfos.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function LeftInfos(): JSX.Element {

    const [ storage, setStorage ] = useState()

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('data'))
      setStorage(data)
    })

  return (
    <div className={styles.leftInformations}>
      <div className={styles.box}>
        <span>O que são as compênticas da Redação?</span>
        <LinkButtom to="" label="Saiba mais" translateY="25px" height={45} />
      </div>
      <LinkButtom to="/charts" label="Voltar" height={45} />
    </div>
  )
}
