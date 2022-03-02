import React from 'react';
import styled from 'styled-components';

let Button = styled.button`
  font-size: 14px;
  color: ${(props) =>
    props.selected
      ? props.name === 'etc'
        ? '#EAEAEA'
        : '#343A40'
      : '#909090'};
  background-color: ${(props) => (props.selected ? props.color : '#EAEAEA')};
  padding: 2px 16px;
  margin: 1rem 4px 0 4px;
  border-radius: 16px;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
`;
const StackTagBtn = React.memo(({ stack, selected, handleStackClick }) => {
  return (
    <Button
      color={stack.color}
      name={stack.name}
      selected={selected}
      onClick={() => handleStackClick(stack, selected)}>
      {stack.tagName}
    </Button>
  );
});

export default StackTagBtn;
