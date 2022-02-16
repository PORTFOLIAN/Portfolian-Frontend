import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StackTagDiv from '../StackTagDiv/stackTagDiv';
import UnitInfo from '../UnitInfo/unitInfo';
import { ReactComponent as BookMarKTrue } from '../asset/projectBookmark.svg';
import { ReactComponent as BookMarkFalse } from '../asset/projectBookmarkFalse.svg'

function ProjectManager({ leader, capacity, view, status, bookMark }) {
  const user = useSelector((state) => state.user);
  const [bookmark, setBookmark] = useState(bookMark);
  return (
    <ManagerContainer>
      {
        user.userId === leader.userId 
        ? null
        : 
        <>
          {
            bookMark
            ? <BookMarKTrue style={{alignSelf: "flex-start", cursor: "pointer", marginLeft: "1rem"}}/>
            : <BookMarkFalse style={{alignSelf: "flex-start", cursor: "pointer", marginLeft: "1rem"}}/>
          }
        </>
      }
      <ManagerImg src={leader.photo} alt="leader profile"></ManagerImg>
      <DescContainer>
        <ManagerText>Team Manager</ManagerText>
        <ManagerNickname>{leader.nickName}</ManagerNickname>
        <ManagerDesc>{leader.description}</ManagerDesc>
        <StackContainer>
          <ManagerStackText>팀장 스택</ManagerStackText>
          <ManagerStack>
            {leader.stack && <StackTagDiv tagName={leader.stack} margin={"0"}></StackTagDiv>}
          </ManagerStack>
        </StackContainer>
        <UnitInfo capacity={capacity} view={view}>
          {
            leader.userId === user.userId
            ? <>
                {
                  status === 0 
                  ? <ManagerBtn status={true}>모집마감하기</ManagerBtn> 
                  : <ManagerBtn status={false}>재모집하기</ManagerBtn>
                }
              </>
            : <>
                {
                  status === 0
                  ? <UserBtn status={true}>채팅하기</UserBtn> 
                  : <UserBtn status={false}>모집마감</UserBtn>
                }
              </>
          }
        </UnitInfo>
      </DescContainer>
    </ManagerContainer>
  );
}

export default ProjectManager;

const ManagerContainer = styled.div`
  width: 100%;
  border: 1px solid #CCCCCC;
  padding-bottom: 1rem;
`

const ManagerImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: block;
  margin: 1.5rem auto;
`

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 26px;
`
const ManagerNickname = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const ManagerText = styled(ManagerNickname)`
  color: #6F9ACD;
  font-size: 14px;
`

const ManagerDesc = styled.div`
  margin-top: 1rem;
  font-size: 14px;
`

const ManagerStackText = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`

const ManagerStack = styled.div`
  /* width: 0; */
  display: flex;
  /* font-weight: 500; */
  margin-bottom: 1rem;
`

const StackContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`

const Btn = styled.button`
  width: 100%;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  outline: 0;
  margin-top: 1rem;
`

const UserBtn = styled(Btn)`
  background-color: ${props => (props.status ? '#FFF' : '#6F9ACD')};
  color: ${props => (props.status ? '#6F9ACD' : '#FFF')};
  cursor: ${props=> (props.status ? 'pointer' : 'default')};
  border: ${props => (props.status ? '1px solid #6F9ACD' : 'none')};
`

const ManagerBtn = styled(Btn)`
  background-color: ${props => (props.status ? '#FFF' : '#6F9ACD')};
  color: ${props => (props.status ? '#6F9ACD' : '#FFF')};
  cursor: pointer;
  border: ${props => (props.status ? '1px solid #6F9ACD' : 'none')};
`


