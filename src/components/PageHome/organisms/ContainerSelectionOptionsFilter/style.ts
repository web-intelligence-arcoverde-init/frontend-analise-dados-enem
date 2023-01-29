import styled from 'styled-components'

import { COLORS } from '../../../../common'

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
