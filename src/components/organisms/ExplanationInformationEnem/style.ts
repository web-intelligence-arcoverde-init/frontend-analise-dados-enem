import styled from 'styled-components'
import { COLORS } from 'src/common'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin-bottom: -30px;
`

export const ContainerQuestion = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLORS['blue-100']};
  height: 80px;
  width: 49%;
  border-radius: 16px;
  font-size: 24px;
  color: white;
`
