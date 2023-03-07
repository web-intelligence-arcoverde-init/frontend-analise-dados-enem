import { Link } from 'react-router-dom'

import styles from './LinkButtom.module.css'

interface LinkButtom {
  label: string
  to: string
  translateY?: string
  state?: any
  height?: number
}

export default function LinkButtom(props: LinkButtom): JSX.Element {
  const style = {
    transform: `translateY(${props.translateY})`,
    height: props.height,
    width: '100%',
  }

  return (
    <a className={styles.linkButtom}>
      <Link to={props.to} rel="" style={{ ...style }} state={props.state}>
        {props.label}
      </Link>
    </a>
  )
}
