import styled from 'styled-components'
import { COLORS } from 'src/common'

export const Title = styled.h1`
  color: ${COLORS['white-100']};
  font-family: 'Noto Sans Tangsa', sans-serif;
`

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TitleContainer = styled.div`
  background-color: ${COLORS['blue-100']};
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 0 40px;
`
