import React from 'react'
import styled from 'styled-components'
import { wholeStack } from '../../modules/wholeStack'
import StackTagDiv from '../StackTagDiv/stackTagDiv'

function RecruitStacks({ stackList }) {
  return (
    <StackListContainer>
      {
        stackList.map((elem, i) => {
          return <StackTagDiv tagName={elem} key={i}></StackTagDiv>
        })
      }
    </StackListContainer>
  )
}

export default RecruitStacks

const StackListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  @media screen and (max-width: 966px){
    justify-content: center;
  }
`