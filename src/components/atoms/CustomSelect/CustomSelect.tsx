import styled from 'styled-components'

import { COLORS } from 'src/common'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  color: ${COLORS['white-100']};
  font-size: 1.15rem;
  font-family: 'Noto Sans Tangsa', sans-serif;
`

const Select = styled.select`
  height: 38px;
  border-radius: 8px;
  margin-top: 6px;
  border: none;
`

interface OptionProps {
  cod_inep: string | number | readonly string[] | undefined
  value: string
}

interface SelectInputProps {
  label: string
  options: OptionProps[]
  onChange?: (e: any) => any
  name?: string
}

export const CustomSelect = ({
  label,
  options,
  onChange,
  name,
}: SelectInputProps) => {
  return (
    <Container>
      <Label>{label}:</Label>
      <Select onChange={onChange} name={name}>
        <option></option>
        {options.map(item => {
          return (
            <option value={item.cod_inep} key={item.value}>
              {item.value}
            </option>
          )
        })}
      </Select>
    </Container>
  )
}
