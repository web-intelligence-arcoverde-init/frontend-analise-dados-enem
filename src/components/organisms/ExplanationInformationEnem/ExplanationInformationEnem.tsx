import { TbZoomQuestion } from 'react-icons/tb'

import { LinkButton } from 'src/components'
import { Container, ContainerQuestion } from './style'

export const ExplanationInformationEnem = () => {
  return (
    <Container>
      <ContainerQuestion>
        <TbZoomQuestion style={{ fontSize: '50px' }} />
        <h5>O que são habilidades?</h5>
        <LinkButton to="/about/habilities" label="Saiba mais" height={40} />
      </ContainerQuestion>
      <ContainerQuestion>
        <TbZoomQuestion style={{ fontSize: '50px' }} />
        <h5>O que são competências?</h5>
        <LinkButton to="/about/competences" label="Saiba mais" height={40} />
      </ContainerQuestion>
    </Container>
  )
}
