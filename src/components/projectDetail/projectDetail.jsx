import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProjectControl from '../ProjectControl/projectControl';
import ProjectStackList from '../ProjectStackList/projectStackList';
import RecruitStacksView from '../RecruitStacksView/recruitStacksView';

function ProjectDetail({ projectId }) {
  const projectRead = useSelector((state)=>state.projectRead);
  return (
    <ProjectContainer>
      <Title>{projectRead.title}</Title>
      <ProjectControl projectId={projectId}/>
      <ProjectStackList stackList={projectRead.stackList}/>
    </ProjectContainer>
  );
}

export default ProjectDetail;

const ProjectContainer = styled.div`
  max-width: 700px;
  margin: 6rem auto 0 auto;
  @media screen and (max-width: 767px) {
    margin-top: 1rem;
  }
`
const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  @media screen and (max-width: 767px){
    margin: 1rem 1rem 1rem 1rem ;
    font-size: 2rem;
  }
`

