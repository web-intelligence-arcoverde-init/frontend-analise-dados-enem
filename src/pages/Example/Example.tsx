import { useSelector } from 'react-redux'
import { TextExample } from 'src/components/TextExample/TextExample'

import { Container } from './styles'

export const Example = () => {
  const example = useSelector(state => state)

  return (
    <Container>
      <TextExample>Example</TextExample>
    </Container>
  )
}
