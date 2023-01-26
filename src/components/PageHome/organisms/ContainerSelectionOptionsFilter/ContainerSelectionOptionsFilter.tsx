import { useState, useEffect } from 'react'
import { COLORS } from 'src/common'
import { SelectInput } from '../../atomics'
import { getProvinces } from 'src/services/utils/externalAPIs'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Divider = styled.div`
  height: 14px;
`

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px;
  background-color: ${COLORS['white-100']};
`

export const Container = styled.div`
  background: ${COLORS['blue-100']};
  width: 80%;
  margin-top: 50px;
  padding: 30px 40px;
  border-radius: 16px;
`

export const GroupOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: flex-end;
`

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

export const ContainerSelectionOptionsFilter = () => {
  // dados que serão usados como filtro na página dos gráficos
  const [data, setData] = useState({
    province: 'Pernambuco',
    city: 'Arcoverde',
    year: '2022',
    school: 'EREM',
    knowledgeArea: '1 - Linguagens, Códigos e suas Tecnologias',
  })

  // busca e armazena lista de estados do Brasil
  const [provinces, setProvinces] = useState([])
  useEffect(() => {
    getProvinces().then(data => setProvinces(data))
  }, [])

  // captura os valores dos options e seta nos estados
  const onChangeHandler = (e: any) => {
    e.preventDefault()
    const optionValue = e.target[e.target.selectedIndex].value

    setData({
      ...data,
      [e.target.name]: optionValue,
    })
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
        <Link to="/charts" state={{ data }}>
          <Button>Gerar Visão Geral</Button>
        </Link>
        <Link  to="/heatmap" state={{ data }}>
          <Button>Gerar Mapa de Calor</Button>
        </Link>
      </GroupButton>
    </Container>
  )
}
