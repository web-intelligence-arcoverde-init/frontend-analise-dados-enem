import styled from 'styled-components'
import { TbZoomQuestion } from "react-icons/tb";

import { COLORS } from '../../../common'
import LinkButtom from 'src/pages/Charts/atomics/LinkButtom';

export const Content = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 80%;
margin-bottom: -30px;
`

export const Question = styled.div`
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

export const ContentSection = () => {

  return (
    <Content>
      <Question>
        <TbZoomQuestion style={{ fontSize: '50px' }} />
        <h5>O que são habilidades?</h5>
        <LinkButtom to="/habilities" label="Saiba mais"  height={40}/>
      </Question>
      <Question>
        <TbZoomQuestion style={{ fontSize: '50px' }} />
        <h5>O que são competências?</h5>
        <LinkButtom to="" label="Saiba mais" height={40}/>
      </Question>
    </Content>
  )
}
