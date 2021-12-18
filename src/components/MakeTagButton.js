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

    if (trueList.length===32 && check === 0) { //체크가 0이면? 전체선택상태, ㅁ
      wholeControl(0); //이게 무슨함수냐면 전체선택 전체취소해주는거 -> 파라미터가 0이면 전체 취소 만들어줌
      copyObj = tagSelect.map((elem) => {
        let temp = elem;
        if (temp.name === name) {
          temp.select = !temp.select;
        }
        return temp;
      })
      setTagSelect(copyObj);
      setCheck(1); //wholeControl에서 전체취소 만들어줬으니까 check를 1로 바꿔서 담번엔 전체선택으로 만들어줘야해
    }
    else { //몇개만 선택됐을때 혹은 아무것도 선택 안됐을 때
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
    let copyObj; //여기에 뭐가들어가냐면 스택명+선택유무 값 업데이트 된 객체배열
    let copyArr; //여기에 뭐가들어가냐면 선택된 값만 들어있는 스트링 배열
    if (n === 1){ //n==1이면 check가 1인상태인데.. 전체취소에서 전체선택으로
      copyObj = tagSelect.map((elem) => {
        if (elem.select === false) {
          elem.select = true;
        }
        return elem;
      })
      setTagSelect(copyObj);
      copyArr = tagSelect.map(elem => elem.name);
      setTrueList(copyArr);
    } else { //n==1이면 선택선택상태에서 전체취소로
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
