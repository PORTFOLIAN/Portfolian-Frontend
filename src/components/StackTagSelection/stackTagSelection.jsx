import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { update } from '../../modules/recruitList';
import {
  addStack,
  clearStack,
  initStack,
  removeStack,
} from '../../modules/stackList';
import { wholeStack } from '../../modules/wholeStack';
import project from '../../service/project_service';
import StackTagBtn from '../StackTagBtn/stackTagBtn';

const Button = styled.button`
  font-size: 14px;
  color: ${(props) =>
    props.select ? (props.name === 'ect' ? '#EAEAEA' : '#343A40') : '#909090'};
  background-color: ${(props) => (props.select ? props.color : '#EAEAEA')};
  padding: 2px 16px;
  margin: 1rem 4px 0 4px;
  border-radius: 16px;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
`;

const Container = styled.div`
  margin: 16px auto;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StackTagSelection = React.memo(() => {
  const wholeStacks = wholeStack; //일단 얘는 필요해(화면에 출력시켜야하니까) -> 얘로 맵함수 돌리면서 리덕스에 있는 요소만 색깔 칠해줄까? -> 그럼 일단 밑에 state 주석처리하고 테스트해봐
  // const [selectStacks, setSelectStacks] = useState(); //근데 선택된 스택 어차피 리듀서로 관리할껀데 이거 해줄 필요있나? -> 없음 -> 리듀서 만들고오자 -> 만들고옴
  const selectStacks = useSelector((state) => state.stackList);
  const recruitList = useSelector((state) => state.recruitList);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //선택 된 스택태그 select값 false로 바꿔주면서 동시에 전체선택 전체취소 부분 컨트롤해줘야함!
  const handleStackClick = useCallback(
    (stackName, selected) => {
      //이 함수도 리덕스 스테이트 갯수체크해서 리듀서로 관리해주자
      //유즈이팩트도 필요없을 것 같음
      if (selectStacks.length === 32) {
        dispatch(clearStack());
        // console.log("addStacks하기 전 stackName형태확인: ", stackName);
        dispatch(addStack(stackName));
      } else if (selectStacks.length === 1) {
        if (!selected) dispatch(addStack(stackName));
        else dispatch(initStack());
      } else {
        if (!selected) dispatch(addStack(stackName));
        else dispatch(removeStack(stackName));
      }
      //이걸 맨 마지막에 실행되도록 하는 방법은?
    },
    [dispatch, selectStacks],
  );

  useEffect(() => {
    project.getList(user.userId, recruitList).then((response) => {
      // console.log("recruit.getList response: ",response);
      dispatch(update({ key: 'recruit', value: response.data.articleList }));
      // console.log("recruitList.stack: ", recruitList.stack);
    });
  }, [recruitList.stack]);

  useEffect(() => {
    dispatch(update({ key: 'stack', value: selectStacks.map((a) => a.name) }));
  }, [selectStacks]);

  // useEffect(() => {
  //   dispatch(update({key: "stack", value: selectStacks}));
  // }, [])

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
      {wholeStacks.map((stack, i) => {
        let selected = selectStacks.includes(stack); //stack이 선택리스트에 포함되어있으면 true 아니면 false
        return (
          <StackTagBtn
            stack={stack}
            selected={selected}
            key={i}
            handleStackClick={handleStackClick}></StackTagBtn>
        );
      })}
      {selectStacks.length === 32 ? (
        <Button color='#EAEAEA' onClick={() => dispatch(clearStack())}>
          전체취소
        </Button>
      ) : (
        <Button color='#EAEAEA' onClick={() => dispatch(initStack())}>
          전체선택
        </Button>
      )}
    </Container>
  );
});

export default StackTagSelection;
