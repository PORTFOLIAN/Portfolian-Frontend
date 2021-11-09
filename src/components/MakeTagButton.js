import { immerable } from 'immer';
import { element } from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

let Button = styled.button`
  font-size: 14px;
  color: ${(props)=> (props.select ? (props.name === 'ect' ? '#EAEAEA' : '#343A40') : '#909090')};
  background-color: ${ props => props.select ? props.color : '#EAEAEA'};
  padding: 2px 16px; 
  margin: 1rem 4px 0 4px;
  border-radius: 16px;
  border: 0;
  cursor: pointer;
  white-space:nowrap;
`;

let Container = styled.div`
  margin: 16px auto;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function MakeTagButton({tagSelect, setTagSelect, trueList, setTrueList}) {
  let stateTag = useSelector((state)=>state.reducer)
  let [check, setCheck] = useState(0);
  let updateTagSelect = (name)=> {
    let copyArr;
    let copyObj;

    if (trueList.length===32 && check === 0) {
      wholeControl(0);
      copyObj = tagSelect.map((elem) => {
        let temp = elem;
        if (temp.name === name) {
          temp.select = !temp.select;
        }
        return temp;
      })
      setTagSelect(copyObj);
      setCheck(1);
    }
    else {
      copyObj = tagSelect.map((elem) => {
        let temp = elem;
        if (temp.name === name) {
          temp.select = !temp.select;
        }
        return temp;
      })
      setTagSelect(copyObj);
    }
    copyArr = tagSelect.filter(elem => elem.select === true).map(elem => elem.name);
    setTrueList(copyArr);
  }

  let wholeControl = (n) => {
    let copyObj;
    let copyArr;
    if (n === 1){
      copyObj = tagSelect.map((elem) => {
        if (elem.select === false) {
          elem.select = true;
        }
        return elem;
      })
      setTagSelect(copyObj);
      copyArr = tagSelect.map(elem => elem.name);
      setTrueList(copyArr);
    } else {
      copyObj = tagSelect.map((elem) => {
        if (elem.select === true) {
          elem.select = false;
        }
        return elem;
      })
      setTagSelect(copyObj);
      setTrueList(['']);
    }
  }
  return (
    <Container>
      {
        stateTag.map((tag)=> {
          let selectElem = tagSelect.find((elem) => tag.name === elem.name);
          return (<Button color={ tag.color } name={tag.name} select={selectElem.select} onClick={(e)=> {
            updateTagSelect(e.target.name);
            
          }}>
            {tag.name}
          </Button>)
        })
      }
      {
        trueList.length === 32 
        ? <Button color='#EAEAEA' onClick={() => wholeControl(0)}>전체취소</Button> : <Button color='#EAEAEA' onClick={() => wholeControl(1)}>전체선택</Button>
      }
    </Container>
  )
}

export default MakeTagButton;
