import { LogoEnemContainer, Header, ContentHome } from 'src/components'

import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Header title="Visualização de dados do ENEM" />
      <LogoEnemContainer />
      <ContentHome />
    </Container>
  )
}
