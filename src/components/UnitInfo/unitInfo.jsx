import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CapacityIcon} from '../asset/capacity.svg';

function UnitInfo({capacity, view, children}) {
  return (
    <UnitContainer>
      <UnitContent>
        <span>모집인원</span>
        <span>
          { capacity }
          <IconDiv>
            <CapacityIcon height="0.8rem"></CapacityIcon>
          </IconDiv>
        </span>
      </UnitContent>
      <UnitContent >
        <span>조회수</span>
        <span>{ view }</span>
      </UnitContent>
      {children}
    </UnitContainer>
  )
}

export default UnitInfo

const UnitContainer = styled.div`
  @media screen and (max-width: 991px){
      margin-top: 4px;
    }
  /* margin-top: 16px; */
`
const UnitContent = styled.div`
  margin-bottom: 4px;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4px;
`

const IconDiv = styled.span`
  margin-left: 4px;
`
