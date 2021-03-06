import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import ProjectManager from '../ProjectManager/projectManager';
import ProjectControl from '../ProjectControl/projectControl';
import ProjectStackList from '../ProjectStackList/projectStackList';
import ProjectTemplate from '../ProjectTemplate/projectTemplate';
import ProjectManagerMobile from '../ProjectManagerMobile/projectManagerMobile';
import ChatContainer from '../ChatContainer/chatContainer';
import ChatRoom from '../ChatRoom/chatRoom';

function ProjectDetail({ projectId }) {
  const projectRead = useSelector((state) => state.projectRead);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [chatSwitch, setChatSwitch] = useState(false);

  const onClickChat = (e) => {
    setChatSwitch(!chatSwitch);
  };

  return (
    <>
      <ProjectContainer>
        <Title>{projectRead.title}</Title>
        <ProjectControl leaderId={projectRead.leader.userId} />
        <DetailContainer>
          <ProjectContents>
            <ProjectStackList stackList={projectRead.stackList} />
            <ProjectTemplate
              contents={projectRead.contents}
              bookMark={projectRead.bookMark}
            />
          </ProjectContents>
          {!isMobile ? (
            <OwnerContents>
              <ProjectManager
                leader={projectRead.leader}
                capacity={projectRead.capacity}
                view={projectRead.view}
                status={projectRead.status}
                bookMark={projectRead.bookMark}
                onClickChat={onClickChat}></ProjectManager>
            </OwnerContents>
          ) : null}
        </DetailContainer>
      </ProjectContainer>
      {isMobile ? (
        <MobileOwnerContents>
          <ProjectManagerMobile
            leader={projectRead.leader}
            capacity={projectRead.capacity}
            view={projectRead.view}
            status={projectRead.status}
            bookMark={projectRead.bookMark}
          />
        </MobileOwnerContents>
      ) : null}
      {chatSwitch ? (
        <ChatContainer onClickChat={onClickChat} roomMode={true}>
          <ChatRoom
            otherUser={projectRead.leader}
            projectId={projectRead.projectId}></ChatRoom>
        </ChatContainer>
      ) : null}
    </>
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
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    margin: 1rem 1rem 1rem 1rem;
    font-size: 2rem;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    /* display: block; */
  }
`;
const ProjectContents = styled.div`
  /* width: 100%; */
  max-width: 600px;
`;

const OwnerContents = styled.div`
  width: 160px;
  min-width: 160px;
  /* position: fixed; 
  right: 48px; */
  /* margin-left: 1rem; */
  margin-top: 1rem;
  @media screen and (max-width: 768) {
    display: none;
  }
`;

const MobileOwnerContents = styled.div`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  border-top: 1px solid #cfcfcf;
  height: 8rem;
  margin-top: 1rem;
`;
