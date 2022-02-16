import React from 'react';
import styled from 'styled-components';
import ProjectStackTag from '../ProjectStackTag/projectStackTag';


function ProjectStackList({stackList}) {
  return (
    <StackListContainer>
      {
        stackList.map((elem, i) => {
          return <ProjectStackTag tagName={elem} key={i}></ProjectStackTag>
        })
      }
    </StackListContainer>
  );
}

export default ProjectStackList;

const StackListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;
  /* width: 100%; */
  @media screen and (max-width: 768px){
    /* justify-content: center; */
    margin-left: 1rem;
    font-weight: 500;
  }
`