//@ts-ignore
import styles from './ContainerChooseAnSkill.module.css'
import { RiStackFill } from 'react-icons/ri'

import { useState, useEffect } from 'react'
import { SkillChart } from 'src/components/PageHome/organisms/SkillChart/EssayChart'
import { useDispatch, useSelector } from 'react-redux'
import { readSkillByRequest } from 'src/store/modules/results/actions'

export default function ContainerChooseAnSkill(): JSX.Element {
  const dispatch = useDispatch()

  const { skillBySelect } = useSelector((state: any) => state.results)

  console.log(skillBySelect[0])

  useEffect(() => {
    dispatch(readSkillByRequest())
  }, [])

  const [formatedSkill, setFormatedSkill] = useState([])

  const [description, setDescription] = useState('')

  const filterInformations = (value: string) => {
    let newArray = []

    let example = skillBySelect.filter(item => {
      return item.skill === value
    })

    newArray.push(example[0].qtdAcertos)
    newArray.push(example[0].qtdErros)
    setDescription(example[0].descricao)
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
          {skillBySelect.map((option, i) => {
            return (
              <option key={i} value={option.skill}>
                {option.skill}
              </option>
            )
          })}
        </select>
      </div>
      <div className={styles.bottomContainer}>
        <div style={{ width: '50%', height: '100%', padding: '10px' }}>
          <h2 style={{ marginBottom: 10 }}>
            Descrição da habilidade escolhida:
          </h2>
          <h4>{description}</h4>
        </div>
        <div className={styles.chartBox}>
          <SkillChart filterData={formatedSkill} />
        </div>
      </div>
    </div>
  )
}
