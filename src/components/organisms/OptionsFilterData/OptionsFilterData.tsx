import { useState } from 'react'

import { SelectInput } from '../../PageHome/atomics'

import { Link } from 'react-router-dom'

import { Divider, Button, Container, GroupOptions, GroupButton } from './style'

import {
  SelectCity,
  SelectProvice,
  SelectSchool,
  SelectYear,
} from 'src/components'

const optionsKnowledgeArea = [
  { value: '1 - Linguagens, Códigos e suas Tecnologias', code: '' },
  { value: '2 - Ciências Humanas e suas Tecnologias', code: '' },
  { value: '3 - Matemática e suas Tecnologias', code: '' },
  { value: '4 - Ciências da Natureza e suas Tecnologias', code: '' },
]

export const OptionsFilterData = () => {
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const [escola, setEscola] = useState('')
  const [ano, setAno] = useState('')
  const [tecnologia, setTecnologia] = useState('')

  const onChangeHandler = (e: any) => {
    e.preventDefault()
  }

  return (
    <Container>
      <GroupOptions>
        <SelectProvice setEstado={setEstado} />
        <SelectYear setAno={setAno} />
        <SelectCity setCidade={setCidade} estado={estado} ano={ano} />
      </GroupOptions>
      <Divider />
      <SelectSchool ano={ano} cidade={cidade} setEscola={setEscola} />
      <Divider />
      <SelectInput
        label="Área de conhecimento"
        options={optionsKnowledgeArea}
        name="knowledgeArea"
        onChange={e => {
          setTecnologia(e.target.value)
        }}
      />
      <Divider />
      <GroupButton>
        <Link to="charts">
          <Button>Gerar Visão Geral</Button>
        </Link>
        <Button>Gerar Mapa de Calor</Button>
      </GroupButton>
    </Container>
  )
}
