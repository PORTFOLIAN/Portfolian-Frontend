import React, { useEffect, useState } from 'react'
import { wholeStack } from '../../modules/wholeStack';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import StackTagBtn from '../StackTagBtn/stackTagBtn';
import {ReactComponent as Delete} from '../asset/close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeStacks } from '../../modules/write';

function OwnerStackSelection({ handleSetStacks }) {
  const dispatch = useDispatch();
  const {ownerStack} = useSelector(({write}) => ({
    ownerStack: write.ownerStack,
  }));
  const [wholeStacks, setWholeStacks] = useState([]);
  const [selectCnt, setSelectCnt] = useState(0);
  const [selectStack, setSelectStack] = useState();

  const handleOwnerStackDispatch = (stackName)=> {
    dispatch(changeStacks({key: "ownerStack", value: stackName}));
  }

  const handleStackClick = (tag, select)=>{
    const tempWholeStacks = wholeStacks.map((stack, i) => {
      if (stack.name === tag.name) {
        if (stack.select === false ) {
          if (selectCnt < 1) {
            setSelectStack(stack);
            setSelectCnt(selectCnt+1);
          }
          else {
            toast.error("방장스택은 최대 1개까지 선택 가능합니다.", {
              position: toast.POSITION.TOP_RIGHT,
              theme: 'light',
              autoClose: 3000,
            })
            return stack;
          }
        }
        else {
          setSelectStack();
          setSelectCnt(selectCnt-1);
        }
        return ({...stack, select: !stack.select})
      }
      return (stack);
    })
    setWholeStacks(tempWholeStacks);
  }
  
  const resetStackTags = ()=> {
    const stacks= wholeStack.map((stack, i)=>{
      return ({tagName: stack.tagName, name: stack.name, color: stack.color, select: false});
    })
    setWholeStacks(stacks);
    setSelectStack();
    setSelectCnt(0);
  }

  useEffect(() => {
    resetStackTags();
    if (ownerStack.length > 0) {
      const stacks = wholeStack.map((stack, i) => {
        if (ownerStack === stack.name) {
          setSelectStack({...stack, select: true});
          return ({...stack, select: true});
        }
        return ({...stack, select: false});
      })
      setWholeStacks(stacks);
      setSelectCnt(selectCnt+1);
    }
  }, [])

  useEffect(()=> {
    if(selectStack)
      handleOwnerStackDispatch(selectStack.name)
    else
      handleOwnerStackDispatch("")
  }, [selectStack])

  return (
    <>
      <OwnerStackContainer>
        {
          wholeStacks.map((stack, i)=> {
            return (
              <StackTagBtn stack={stack} key={i} selected={stack.select} handleStackClick={handleStackClick}></StackTagBtn> 
            );
          })
        }
      </OwnerStackContainer>
      <SelectStackText>선택된 기술</SelectStackText>
      <SelectStackContainer>
        {
          selectStack
          ?<>
            <SelectStackSpan color={selectStack.color} name={selectStack.tagName}>
              {selectStack.tagName}
            </SelectStackSpan>
            <Delete width="12px" style={{cursor: "pointer"}}onClick={resetStackTags}></Delete>
          </>
          : <SelectStackSpan color={"#fff"}>
            &nbsp;
          </SelectStackSpan>
        }
      </SelectStackContainer>
    </>
  )
}

export default OwnerStackSelection

const OwnerStackContainer = styled.div`
  height: 12rem;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #b4b4b47b;
  /* background-color: #c9c9c91d; */
  margin: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  ::-webkit-scrollbar { width: 12px; }
  ::-webkit-scrollbar-thumb { background: #a9a9a9; }
`
const SelectStackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

const SelectStackText = styled.div`
  font-size: 14px;
`

const SelectStackSpan = styled.span`
  font-size: 14px;
  color: ${(props)=> props.name=== 'ect' ? '#EAEAEA':'#343A40'};
  background-color: ${ props =>  props.color};
  padding: 2px 16px; 
  border-radius: 16px;
  border: 0;
  white-space:nowrap;
  margin: 0 0.3rem;
`
