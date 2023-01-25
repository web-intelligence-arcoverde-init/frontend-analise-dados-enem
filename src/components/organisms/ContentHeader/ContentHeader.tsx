import styled from 'styled-components'

import { IMAGES } from '../../../assets'

const { logo } = IMAGES

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 0 40px;
  margin-top: 30px;
`

export const ContainerTitle = styled.h2`
  font-size: 6rem;
  font-family: 'Noto Sans Tangsa', sans-serif;
`

export const ContainerDescription = styled.h4`
  font-size: 2.25rem;
  font-family: 'Noto Sans Tangsa', sans-serif;
`

export const ContainerHeader = () => {
  return (
    <Content>
      <img
        src={logo}
        alt="Logo ENEM"
        width="100%"
        height="100%"
        style={{
          width: '350px',
          height: '220px',
          marginTop: '30px',
          marginBottom: '20px'
        }}
      />
    </Content>
  )
}
