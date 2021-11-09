import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

let Div = styled.div`
  font-size: 12px;
  color: ${ props=>(props.name === 'ect' ? '#EAEAEA' : '#343A40')};
  background-color: ${ props => props.color };
  padding: 2px 16px; 
  margin: 16px 8px 0 0;
  border-radius: 16px;
  border: 0;
  white-space:nowrap;
`;

function MakeTagDiv(props) {
  const tag = props.stackObj.find((ar) => ar.name === props.stack)
  return (
    <>
      <Div color={tag.color} name={tag.name}> { props.stack } </Div>
    </>
  )
}


function stateToProps(state){
  return{
    stackObj: state.reducer,
  }
}

export default connect(stateToProps)(MakeTagDiv);
