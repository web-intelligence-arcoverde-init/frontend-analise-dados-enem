import { useState } from 'react'
import { RiStackFill } from 'react-icons/ri'
import LinkButtom from 'src/components/PageCharts/atomics/LinkButtom'
import { EssayChart, SkillsChart } from 'src/components/PageHome/organisms'
import styles from './RightInfos.module.css'

const options = ['C-LC-1', 'C-LC-2', 'C-LC-3']

export const RightInfos = () => {
  const [selectedOption, setSelectedOption] = useState({ option: '' })

  const onChangeHandler = (e: any) => {
    e.preventDefault()
    const optionValue = e.target[e.target.selectedIndex].value

    setSelectedOption({
      option: optionValue,
    })
  }

  return (
    <aside className={styles.sideContent}>
      <div className={styles.topContainer}>
        <h2 className={styles.title}>
          <RiStackFill />
          Escolha uma competência
         
        </h2>
        <select name="" style={{height: '30px'}} onChange={e => onChangeHandler(e)}>
          {options.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option}
              </option>
            )
          })}
        </select>
        <LinkButtom to='/' label='Voltar' height={30}/>
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
          <SkillsChart />
        </div>
        <div className={styles.chartBox}>
          <EssayChart />
          <LinkButtom to="/about/essaycompetences" label="Competências" height={30} translateY="20px"/>
        </div>
      </div>
    </aside>
  )
}
