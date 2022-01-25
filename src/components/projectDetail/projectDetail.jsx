import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProjectManager from '../../ProjectManager/projectManager';
import ProjectControl from '../ProjectControl/projectControl';
import ProjectStackList from '../ProjectStackList/projectStackList';
import ProjectTemplate from '../ProjectTemplate/projectTemplate';
import {useMediaQuery} from 'react-responsive'

function ProjectDetail({ projectId }) {
  const projectRead = useSelector((state)=>state.projectRead);
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})

  return (
    <ProjectContainer>
      <Title>{projectRead.title}</Title>
      <ProjectControl leaderId={projectRead.leader.userId}/>
      <DetailContainer>
        <ProjectContents>
          <ProjectStackList stackList={projectRead.stackList}/>
          <ProjectTemplate contents={projectRead.contents}/>
        </ProjectContents>
        {
          !isMobile
          ?
          <OwnerContents>
            <ProjectManager leader={projectRead.leader} capacity={projectRead.capacity} view={projectRead.view} status={projectRead.status}>

            </ProjectManager>
          </OwnerContents>
          : null
        }
      </DetailContainer>
    </ProjectContainer>
  );
}

export default ProjectDetail;

const ProjectContainer = styled.div`
  max-width: 864px;
  margin: 6rem auto 0 auto;
  padding: 0 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`
const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  @media screen and (max-width: 768px){
    margin: 1rem 1rem 1rem 1rem ;
    font-size: 2rem;
  }
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ProjectContents = styled.div`
  /* width: 100%; */
  /* max-width: 600px; */
`

const OwnerContents = styled.div`
  width: 160px;
  min-width: 160px;
  /* margin-left: 1rem; */
  margin-top: 1rem;
  @media screen and (max-width: 768) {
    display: none;
  }
`