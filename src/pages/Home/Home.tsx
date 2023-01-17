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

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 0 40px;
`

export const Home = () => {
  return (
    <div style={{ background: '#F2F2F2', height: '100vh' }}>
      <Header>
        <TitleContainer>
          <Title>Visualização de Dados do ENEM</Title>
        </TitleContainer>

        <ContainerHeader />
      </Header>
      <Content>
        <ContainerSelectionOptionsFilter />
      </Content>
    </div>
  )
}
