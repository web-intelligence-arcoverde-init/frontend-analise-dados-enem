import { COLORS } from '../../common'

import { ContainerHeader } from '../../components/organisms/ContentHeader/ContentHeader'

import { ContainerSelectionOptionsFilter } from '../../components'

import styled from 'styled-components'

const Title = styled.h1`
  color: ${COLORS['white-100']};
  font-family: 'Noto Sans Tangsa', sans-serif;
`

const Header = styled.header`
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

export const Home = () => {
  return (
    <div>
      <Header>
        <TitleContainer>
          <Title>ENEM</Title>
        </TitleContainer>

        <ContainerHeader />
      </Header>

      <ContainerSelectionOptionsFilter />
    </div>
  )
}
