import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { addStack, clearStack, initStack, removeStack } from '../../modules/stackList';
import wholeStack from '../../modules/wholeStack';
import StackTagBtn from '../StackTagBtn/stackTagBtn';

const Button = styled.button`
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

const Container = styled.div`
  margin: 16px auto;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

// 홀스택 리스트에서 스택들 가져와
// 홀스택s 돌면서 버튼 만들어줘
// 버튼에 이벤트 달아줘 (클릭하면 true로 바꿔주기(색깔변경때문에)-> 트루인 스택 관리하는 배열도 필요함) (클릭하면 리덕스의 스택관련한거 관리해주기)
// 수정 전 컴포넌트에서 트루리스트는 길이 재는걸로만 사용했ㄷ으니까 그거는 filter나 reduce로 바궈주자
// 선택된 태그는 리크루잇리스트 리덕스로 넣어주기
// 리크루잇 리스트 리덕스에서 api통신하는 게시글 조회수정어쩌고 관리 모듈 호출해주기
// 그러면 그 api통신 관리 모듈도 만들어야겟지~?

const StackTagSelection = React.memo(() => {
  // let stateTag = useSelector((state)=>state.reducer);
  const wholeStacks = wholeStack; //일단 얘는 필요해(화면에 출력시켜야하니까) -> 얘로 맵함수 돌리면서 리덕스에 있는 요소만 색깔 칠해줄까? -> 그럼 일단 밑에 state 주석처리하고 테스트해봐
  // const [selectStacks, setSelectStacks] = useState(); //근데 선택된 스택 어차피 리듀서로 관리할껀데 이거 해줄 필요있나? -> 없음 -> 리듀서 만들고오자 -> 만들고옴
  const selectStacks = useSelector((state)=>state.stackList);
  const dispatch = useDispatch();


  //선택 된 스택태그 select값 false로 바꿔주면서 동시에 전체선택 전체취소 부분 컨트롤해줘야함! 
  const handleStackClick = useCallback(
    (stackName, selected) => {

    //이 함수도 리덕스 스테이트 갯수체크해서 리듀서로 관리해주자
    //유즈이팩트도 필요없을 것 같음
    if (selectStacks.length === 32) {
      dispatch(clearStack());
      dispatch(addStack(stackName));
    } else if (selectStacks.length === 1) {
      if (!selected) dispatch(addStack(stackName));
      else dispatch(initStack());
    } else {
      if (!selected) dispatch(addStack(stackName));
      else dispatch(removeStack(stackName));
    }
  },[dispatch, selectStacks.length]); //useCallback과 두번째 파라미터의 의미 찾기

  //클릭된 스택과 안된 스택 관리하는 setSelectStacks 초기값 true로 모두 장전, 종료될 때 선택값 리셋(이거맞아?)->테스트해보고 와..!
  // useEffect(() => {
  //   const tempSelectStacks = wholeStacks.map((stack)=> {
  //     let tempStack = {name: stack.name, select: true};
  //     return tempStack;
  //   })
  //   setSelectStacks(tempSelectStacks);
  //   return () => {
  //     setSelectStacks([])
  //   }
  // }, [wholeStacks],[])
  return (
    <Container>
      {
        wholeStacks.map((stack, i) => {
          let selected = selectStacks.includes(stack); //stack이 선택리스트에 포함되어있으면 true 아니면 false
          return (
            <StackTagBtn stack={stack} selected={selected} key={i} handleStackClick={handleStackClick}></StackTagBtn> //키값을 넘겨주는 이유는 뭘까?
          );
        })
      }
      {
         selectStacks.length === 32 
         ? <Button color='#EAEAEA' onClick={()=>  dispatch(clearStack())}>전체취소</Button> : <Button color='#EAEAEA' onClick={()=>dispatch(initStack())}>전체선택</Button>
      }
    

    </Container>
  )
})

export default StackTagSelection;
