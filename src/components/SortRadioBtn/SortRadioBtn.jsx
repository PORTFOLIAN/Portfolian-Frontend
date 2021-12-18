import React, { useState } from 'react'
import styled from 'styled-components'

const RadioSelector = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 22px;
`;

const RadioElem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioImg = styled.img`
  width: 12px;
  margin: 0 5px 0 20px;
`;


function SortRadioBtn() {
  let radioValue = ['최신순', '조회순', '북마크'];
  const [radioState, setRadioState] = useState('최신순');
  const handleClickRadio = (name) => {
    setRadioState(name);
  }

  return (
    <RadioSelector>
          {
            radioValue.map(function(name){
            return (
              <RadioElem onClick={()=>handleClickRadio(name)}>
                {
                radioState === name
                ?<RadioImg alt="LOGO" src="img/circle.svg"></RadioImg>
                :<RadioImg alt="LOGO" src="img/circle_empty.svg"></RadioImg>
                }
                <div>{ name }</div>
              </RadioElem>
              )
            })
          }
        </RadioSelector>
  )
}

export default SortRadioBtn
