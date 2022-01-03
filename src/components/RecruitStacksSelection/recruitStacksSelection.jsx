import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components'
import { wholeStack } from '../../modules/wholeStack'
import StackTagBtn from '../StackTagBtn/stackTagBtn'

function RecruitStacksSelection() {
  const [wholeStacks, setWholeStacks] = useState([]);
  const [selectCnt, setSelectCnt] = useState(0);
  const [selectList, setSelectList] = useState([]);
  const handleStackClick = (tag, select)=>{
    const tempWholeStacks = wholeStacks.map((stack, i) => {
      if (stack.name === tag.name) {
        if (stack.select === false ) {
          if (selectCnt < 7) {
            setSelectList(selectList.concat(stack.name));
            setSelectCnt(selectCnt+1);
          }
          else {
            toast.error("스택은 최대 7개까지 선택 가능합니다.", {
              position: toast.POSITION.TOP_RIGHT,
              theme: 'light',
              autoClose: 3000,
            })
            return stack;
          }
        }
        else {
          setSelectList(selectList.filter(x => x!==stack.name))
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
  }

  useEffect(() => {
    resetStackTags();
  }, [])

  useEffect(()=>{
    console.log(selectCnt);
    console.log(selectList);
  }, [selectCnt, selectList])

  return (
    <div>
      <Text>사용 기술 선택 (최대 7개)</Text>
      {
        wholeStacks.map((stack, i)=> {
          return (
            <StackTagBtn stack={stack} key={i} selected={stack.select} handleStackClick={handleStackClick}></StackTagBtn> 
          );
        })
      }
    </div>
  )
}

export default RecruitStacksSelection

const Text = styled.div`
  ont-size: 18px;
  font-weight: 500;
  color: #909090;
  margin-bottom: 4px;
`