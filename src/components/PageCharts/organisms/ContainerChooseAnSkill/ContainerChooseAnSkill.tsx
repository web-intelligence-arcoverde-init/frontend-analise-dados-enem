import styles from './ContainerChooseAnSkill.module.css'
import { RiStackFill } from 'react-icons/ri'

import { useHookSkillsById } from 'src/hooks/useHookSkillsById'

import { useState } from 'react'
import { SkillChart } from 'src/components/PageHome/organisms/SkillChart/EssayChart'

export default function ContainerChooseAnSkill(): JSX.Element {
  const { skills } = useHookSkillsById()

  const [formatedSkill, setFormatedSkill] = useState([])

  const filterInformations = (value: string) => {
    let newArray = []

    let example = skills.filter(item => {
      return item.skill === value
    })

    newArray.push(example[0].qtdAcertos)
    newArray.push(example[0].qtdErros)

    setFormatedSkill(newArray)
  }

  return (
    <div className={styles.chooseAnSkill}>
      <div className={styles.topContainer}>
        <h2 className={styles.title}>
          <RiStackFill />
          Escolha uma habilidade
        </h2>
        <select
          name=""
          id=""
          onChange={e => filterInformations(e.target.value)}
        >
          <option></option>
          {skills.map((option, i) => {
            return (
              <option key={i} value={option.skill}>
                {option.skill}
              </option>
            )
          })}
        </select>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.chartBox}>
          <SkillChart filterData={formatedSkill} />
        </div>
      </div>
    </div>
  )
}
