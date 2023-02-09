import { Container, TitleContainer, Title } from './style'

export const Header = ({ title }: any) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  )
}
