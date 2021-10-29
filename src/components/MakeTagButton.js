import React, { useState } from 'react';
import styled from 'styled-components';

let Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: ${ props=>(props.name === 'ect' ? '#EAEAEA' : '#343A40')};
  background-color: ${ props => props.color };
  padding: 2px 16px; 
  margin: 1rem 4px 0 4px;
  border-radius: 16px;
  border: 0;
  cursor: pointer;
  white-space:nowrap;
`;


function MakeTagButton(props) {
  return (
    <Button color={ props.name.color } name={props.name.name} onClick={()=> {
      // props.name.name === '더보기'
      // ? 아래있는 태그를 트루로 바꿔
      // : 클릭한 태그에 해당하는 참/거짓 스테이트 만들고, 더해서 참인 태그 카운트하는 스테이트도 만들고 누를때마다 참 거짓 바꿔줌
      // : 위와 같은 방법 아니면 버튼마다 참/거짓 스테이트 만들고 참인 스테이트만 어레이에 추가해줌, 참에서 거짓으로 바뀌면 어레이에서 제거. 어레이 초기값은 꽉 차있고 그 상태에서 onclick이벤트 발생하면 클릭한것만 빼고 싹다 false로 상태변화시켜줌, 더보기는 클릭한 후에 전체보기로 바꿔주기
    }}>
      {props.name.name}
    </Button>
  )
}

export default MakeTagButton;
