import { useState } from 'react'

import { SelectInput, EstadosCustomSelect } from '../../PageHome/atomics'

import { Link, useNavigate } from 'react-router-dom'

import { Divider, Button, Container, GroupOptions, GroupButton } from './style'

import {
  SelectCity,
  SelectProvice,
  SelectSchool,
  SelectYear,
} from 'src/components'

const optionsCechnology = [
  { value: 'LC - Linguagens, Códigos e suas Tecnologias', code: 'lc' },
  { value: 'CH - Ciências Humanas e suas Tecnologias', code: 'ch' },
  { value: 'CN - Matemática e suas Tecnologias', code: 'cn' },
  { value: 'MT - Ciências da Natureza e suas Tecnologias', code: 'mt' },
  { value: 'Redação', code: 'redacao' },
]

export const OptionsFilterData = () => {
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const [escola, setEscola] = useState('')
  const [ano, setAno] = useState('')
  const [tecnologia, setTecnologia] = useState('')

  const navigate = useNavigate()

  const handleSubmit = () => {
    const data = {
      cod_inep: escola,
      tecnologia,
      ano,
    }

    localStorage.setItem('data', JSON.stringify(data))

    if (tecnologia.toLocaleLowerCase() === 'redação') {
      navigate('/redacao-media')
    } else {
      navigate('/charts')
    }
  }

  return (
    <Container>
      <GroupOptions>
        <SelectYear setAno={setAno} />
        <SelectProvice setEstado={setEstado} />
        <SelectCity setCidade={setCidade} estado={estado} ano={ano} />
      </GroupOptions>
      <Divider />
      <SelectSchool ano={ano} cidade={cidade} setEscola={setEscola} />
      <Divider />
      <SelectInput
        label="Área de conhecimento"
        options={optionsCechnology}
        name="knowledgeArea"
        onChange={e => {
          setTecnologia(e.target.value.split(' ', 1)[0].toLowerCase())
        }}
      />
      <Divider />
      <GroupButton>
        <Button onClick={() => handleSubmit()}>Gerar Visão Geral</Button>

        <Button>Gerar Mapa de Calor</Button>
      </GroupButton>
    </Container>
  )
}
