//@ts-ignore
import styles from './ContainerChooseAnCompetence.module.css'
import { RiStackFill } from 'react-icons/ri'
import { EssayChart } from 'src/components'
import { useState } from 'react'

const options = ['h1', 'h2', 'h3']

export default function ContainerChooseAnCompetence(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState({ option: '' })

  const onChangeHandler = (e: any) => {
    e.preventDefault()
    const optionValue = e.target[e.target.selectedIndex].value

    setSelectedOption({
      option: optionValue,
    })
  }

  return (
    <div className={styles.chooseAnSkill}>
      <div className={styles.topContainer}>
        <h2 className={styles.title}>
          <RiStackFill />
          Escolha uma habilidade
        </h2>
        <select name="" id="" onChange={e => onChangeHandler(e)}>
          {options.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option}
              </option>
            )
          })}
        </select>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.textBox}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          commodi assumenda rerum, blanditiis velit impedit accusamus voluptatum
          natus quod odit. Natus veniam nam, pariatur Nesciunt commodi assumenda
          rerum, blanditiis velit impedit accusamus voluptatum natus quod odit.
          Natus veniam nam, pariatur
        </div>
        <div className={styles.chartBox}>
          <EssayChart />
        </div>
      </div>
    </div>
  )
}
