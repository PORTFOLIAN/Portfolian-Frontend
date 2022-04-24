import React from 'react';
import styled from 'styled-components';
import { wholeStack } from '../../modules/wholeStack';

function ProjectStackTag({ tagName, profileCheck = false }) {
  return (
    <TagDiv
      name={tagName}
      color={wholeStack.find((elem) => elem.name === tagName).color}
      profileCheck={profileCheck}>
      {wholeStack.find((elem) => elem.name === tagName).tagName}
    </TagDiv>
  );
}

export default ProjectStackTag;

let TagDiv = styled.div`
  font-size: 1rem;
  color: ${(props) => (props.name === 'etc' ? '#EAEAEA' : '#343A40')};
  background-color: ${(props) => props.color};
  padding: 2px 16px;
  margin-top: ${(props) => (props.profileCheck ? '0' : '8px')};
  margin-bottom: ${(props) => (props.profileCheck ? '8px' : '8px')};
  border-radius: 16px;
  border: 0;
  white-space: nowrap;
`;
