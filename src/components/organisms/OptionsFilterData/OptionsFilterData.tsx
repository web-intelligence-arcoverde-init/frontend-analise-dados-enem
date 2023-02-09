import { useState } from 'react'

import { SelectInput } from '../../PageHome/atomics'
import { useHookProvinces } from 'src/hooks'
import { Link } from 'react-router-dom'

import { Divider, Button, Container, GroupOptions, GroupButton } from './style'

const optionsKnowledgeArea = [
  { value: '1 - Linguagens, Códigos e suas Tecnologias' },
  { value: '2 - Ciências Humanas e suas Tecnologias' },
  { value: '3 - Matemática e suas Tecnologias' },
  { value: '4 - Ciências da Natureza e suas Tecnologias' },
  { value: '5 - Redação' },
]
const options = [{ value: 'qualquer um' }, { value: 'outra opção' }]

const optionYears = [
  { value: '2018', text: 'Linguagens, Códigos e suas Tecnologias' },
]

const years = [
  { value: '2015' },
  { value: '2016' },
  { value: '2017' },
  { value: '2018' },
  { value: '2019' },
  { value: '2020' },
  { value: '2021' },
  { value: '2022' },
]

export const OptionsFilterData = () => {
  const [data, setData] = useState([])

  const { provinces } = useHookProvinces()

  // captura os valores dos options e seta nos estados
  const onChangeHandler = (e: any) => {
    e.preventDefault()
    //const optionValue = e.target[e.target.selectedIndex].value
    setData([])
  }

  return (
    <Container>
      <GroupOptions>
        <SelectInput
          label="Estado"
          name="province"
          options={provinces}
          onChange={e => {
            onChangeHandler(e)
          }}
        />
        <SelectInput
          label="Cidade"
          name="city"
          options={options}
          onChange={e => {
            onChangeHandler(e)
          }}
        />
        <SelectInput
          label="Ano"
          name="year"
          options={years}
          onChange={e => {
            onChangeHandler(e)
          }}
        />
      </GroupOptions>
      <Divider />
      <SelectInput
        label="Escola"
        name="school"
        options={options}
        onChange={e => {
          onChangeHandler(e)
        }}
      />
      <Divider />
      <SelectInput
        label="Área de conhecimento"
        options={optionsKnowledgeArea}
        name="knowledgeArea"
        onChange={e => {
          onChangeHandler(e)
        }}
      />
      <Divider />
      <GroupButton>
        <Link to="charts" state={{ data }}>
          <Button>Gerar Visão Geral</Button>
        </Link>
        <Button>Gerar Mapa de Calor</Button>
      </GroupButton>
    </Container>
  )
}
