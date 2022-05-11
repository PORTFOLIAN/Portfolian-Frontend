import React from 'react';
import styled from 'styled-components';
import { wholeStack } from '../../modules/wholeStack';

function StackTagDiv({ tagName, margin }) {
  let size = '1rem';
  if (margin) {
    size = margin;
  }
  return (
    <TagDiv
      name={tagName}
      color={wholeStack.find((elem) => elem.name === tagName).color}
      margin={size}>
      {wholeStack.find((elem) => elem.name === tagName).tagName}
    </TagDiv>
  );
}

export default StackTagDiv;

let TagDiv = styled.div`
  font-size: 12px;
  color: ${(props) => (props.name === 'etc' ? '#EAEAEA' : '#343A40')};
  background-color: ${(props) => props.color};
  padding: 2px 16px;
  margin: ${(props) => props.margin} 8px 0 0;
  border-radius: 16px;
  border: 0;
  white-space: nowrap;
`;
