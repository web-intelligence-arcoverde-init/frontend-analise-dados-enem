import { SelectInput } from '../../PageHome/atomics'

import { useNavigate } from 'react-router-dom'

import { Divider, Button, Container, GroupOptions, GroupButton } from './style'

import {
  SelectCity,
  SelectProvice,
  SelectSchool,
  SelectYear,
} from 'src/components'
import { changerValueFilterSelect } from 'src/store/modules/filter/actions'
import { useDispatch, useSelector } from 'react-redux'

const optionsCechnology = [
  { value: 'LC - Linguagens, Códigos e suas Tecnologias', code: 'lc' },
  { value: 'CH - Ciências Humanas e suas Tecnologias', code: 'ch' },
  { value: 'CN - Matemática e suas Tecnologias', code: 'cn' },
  { value: 'MT - Ciências da Natureza e suas Tecnologias', code: 'mt' },
  { value: 'Redação', code: 'redacao' },
]

export const OptionsFilterData = () => {
  const data = useSelector((state: any) => state.filters.filterSelect)

  const navigate = useNavigate()

  const handleSubmit = () => {
    localStorage.setItem('data', JSON.stringify(data))

    if (data.tecnologia.toLocaleLowerCase() === 'redação') {
      navigate('/redacao-media')
    } else {
      navigate('/charts')
    }
  }

  const dispatch = useDispatch()

  return (
    <Container>
      <GroupOptions>
        <SelectYear />
        <SelectProvice />
        <SelectCity />
      </GroupOptions>
      <Divider />
      <SelectSchool />
      <Divider />
      <SelectInput
        label="Área de conhecimento"
        options={optionsCechnology}
        name="knowledgeArea"
        onChange={e => {
          dispatch(
            changerValueFilterSelect({
              name: 'tecnologia',
              value: e.target.value.split(' ', 1)[0].toLowerCase(),
            }),
          )
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
