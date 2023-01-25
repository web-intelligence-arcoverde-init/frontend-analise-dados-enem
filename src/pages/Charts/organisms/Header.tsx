import styles from './Header.module.css'

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1>Gráficos Analíticos</h1>
        </header>
    )
}