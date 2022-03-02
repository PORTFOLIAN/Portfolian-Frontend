import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../../modules/user';
import { ReactComponent as BookMarKTrue } from '../asset/projectBookmark.svg';
import { ReactComponent as BookMarkFalse } from '../asset/projectBookmarkFalse.svg';
import StackTagDiv from '../StackTagDiv/stackTagDiv';
import { ReactComponent as Views } from '../asset/views.svg';
import { ReactComponent as Capacity } from '../asset/capacity.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProjectManagerMobile({ leader, capacity, view, status, bookMark }) {
  const [bookmark, setBookmark] = useState(bookMark);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const onClickProfile = () => {
    history.push(`/users/${leader.userId}/info`);
  };
  return (
    <ManagerContainer>
      <ManagerUnit>
        {user.userId === leader.userId ? null : (
          <>
            {bookMark ? (
              <BookMarKTrue
                style={{ alignSelf: 'flex-start', cursor: 'pointer' }}
              />
            ) : (
              <BookMarkFalse
                style={{ alignSelf: 'flex-start', cursor: 'pointer' }}
              />
            )}
          </>
        )}
        <ManagerImg
          src={leader.photo}
          alt="leader profile"
          onClick={onClickProfile}
        />
        <ManagerDesctiprion onClick={onClickProfile}>
          <ManagerNickNameText>Team Manager</ManagerNickNameText>
          <ManagerNickName>{leader.nickName}</ManagerNickName>
          <ManagerStack>
            {leader.stack && (
              <StackTagDiv tagName={leader.stack} margin={'0'}></StackTagDiv>
            )}
          </ManagerStack>
        </ManagerDesctiprion>
      </ManagerUnit>
      <ProjectUnit>
        <UnitInfo>
          {capacity}
          <Capacity
            style={{ height: '14px', marginRight: '0.3rem' }}
          ></Capacity>
          {view}
          <Views style={{ marginLeft: '0.2rem' }}></Views>
        </UnitInfo>
        {leader.userId === user.userId ? (
          <>
            {status === 0 ? (
              <ManagerBtn status={true}>모집마감하기</ManagerBtn>
            ) : (
              <ManagerBtn status={false}>재모집하기</ManagerBtn>
            )}
          </>
        ) : (
          <>
            {status === 0 ? (
              <UserBtn status={true}>채팅하기</UserBtn>
            ) : (
              <UserBtn status={false}>모집마감</UserBtn>
            )}
          </>
        )}
      </ProjectUnit>
    </ManagerContainer>
  );
}

export default ProjectManagerMobile;

const ManagerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: #f8f9ff;
`;
const ManagerUnit = styled.div`
  display: flex;
`;

const ManagerImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  display: inline-block;
  align-self: center;
  margin: 0 1rem;
  cursor: pointer;
  @media screen and (max-width: 414px) {
    width: 20vw;
    height: 20vw;
  }
`;

const ManagerDesctiprion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  cursor: pointer;
`;
const ManagerNickName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #343a40;
  /* white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; */
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
  @media screen and (max-width: 414px) {
    max-width: 90%;
  }
`;

const ManagerNickNameText = styled(ManagerNickName)`
  color: #6f9acd;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

const ManagerStack = styled.div`
  /* width: 0; */
  display: flex;
  /* font-weight: 500; */
  margin-top: 0.5rem;
`;

const ProjectUnit = styled.div`
  /* flex-grow: 1; */
  /* align-self: center; */
  /* margin-left: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UnitInfo = styled.div`
  font-size: 12px;
`;

const Btn = styled.button`
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 16px;
  outline: 0;
  width: 8rem;
  @media screen and (max-width: 414px) {
    width: 100%;
    height: 2rem;
    font-size: 12px;
  }
`;

const UserBtn = styled(Btn)`
  background-color: ${(props) => (props.status ? '#FFF' : '#6F9ACD')};
  color: ${(props) => (props.status ? '#6F9ACD' : '#FFF')};
  cursor: ${(props) => (props.status ? 'pointer' : 'default')};
  border: ${(props) => (props.status ? '1px solid #6F9ACD' : 'none')};
`;

const ManagerBtn = styled(Btn)`
  background-color: ${(props) => (props.status ? '#FFF' : '#6F9ACD')};
  color: ${(props) => (props.status ? '#6F9ACD' : '#FFF')};
  cursor: pointer;
  border: ${(props) => (props.status ? '1px solid #6F9ACD' : 'none')};
`;
