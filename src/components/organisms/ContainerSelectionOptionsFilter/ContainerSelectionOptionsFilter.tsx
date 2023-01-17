import { COLORS } from 'src/common'
import { SelectInput } from 'src/components'

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

const options = [{ value: 'qualquer um', text: 'foekfkoe' }]

const optionsKnowledgeArea = [
  { value: '1', text: 'Linguagens, Códigos e suas Tecnologias' },
  { value: '2', text: 'Ciências Humanas e suas Tecnologias' },
  { value: '3', text: 'Matemática e suas Tecnologias' },
  { value: '4', text: 'Ciências da Natureza e suas Tecnologias' },
  { value: '5', text: 'Redação' },
]

const optionYears = [
  { value: '2018', text: 'Linguagens, Códigos e suas Tecnologias' },
]

export const ContainerSelectionOptionsFilter = () => {
  return (
    <Container>
      <GroupOptions>
        <SelectInput label="Estado" options={options} />
        <SelectInput label="Cidade" options={options} />
        <SelectInput label="Ano" options={options} />
      </GroupOptions>
      <Divider />
      <SelectInput label="Escola" options={options} />
      <Divider />
      <SelectInput
        label="Área de conhecimento"
        options={optionsKnowledgeArea}
      />
      <Divider />
      <GroupButton>
        <Button>Gerar Visão Geral</Button>
        <Button>Gerar Mapa de Calor</Button>
      </GroupButton>
    </Container>
  )
}
