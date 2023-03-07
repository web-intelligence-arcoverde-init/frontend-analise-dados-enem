import styles from './Header.module.css'

interface HeaderProps {
  label: string
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <h1>{props.label}</h1>
    </header>
  )
}
