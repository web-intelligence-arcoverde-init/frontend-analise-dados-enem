import styles from './ContainerChooseAnSkill.module.css'
import { RiStackFill } from "react-icons/ri";
import { EssayChart } from 'src/components';

const options = [
    "h1", "h2", "h3"
]

export default function ContainerChooseAnSkill(): JSX.Element {
    return (
        <div className={styles.chooseAnSkill}>
            <div className={styles.topContainer}>
                <h1 className={styles.title}><RiStackFill />Escolha uma habilidade</h1>
                <select name="" id="">
                    {options.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                    })}
                </select>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.textBox}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt commodi assumenda rerum, blanditiis velit
                    impedit accusamus voluptatum natus quod odit. Natus
                    veniam nam, pariatur
                </div>
                <div className={styles.chartBox}>
                    <EssayChart/>
                </div>
            </div>
        </div>
    )
}