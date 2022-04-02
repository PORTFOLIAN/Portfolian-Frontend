import React from 'react';
import styled from 'styled-components';
import ProjectStackTag from '../ProjectStackTag/projectStackTag';

function ProjectStackList({ stackList, profile = false }) {
  return (
    <StackListContainer profile={profile}>
      {stackList.map((elem, i) => {
        return (
          <ProjectStackTag
            tagName={elem}
            key={i}
            profile={profile}></ProjectStackTag>
        );
      })}
    </StackListContainer>
  );
}

export default ProjectStackList;

const StackListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;
  gap: 10px;
  /* width: 100%; */
  @media screen and (max-width: 768px) {
    /* justify-content: center; */
    margin-left: ${(props) => (props.profile ? 0 : '1rem')};
    font-weight: 500;
  }
`;
