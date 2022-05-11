import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BookMarkTrue } from '../asset/bookmark_true.svg';
import { ReactComponent as BookMarkFalse } from '../asset/bookmark_false.svg';
import UnitInfo from '../UnitInfo/unitInfo';
import RecruitStacksView from '../RecruitStacksView/recruitStacksView';
import { useHistory } from 'react-router-dom';
import userService from '../../service/user_service';
import { useSelector } from 'react-redux';

function RecruitCard({ recruitElem }) {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [bookMarkMode, setBookMarkMode] = useState(recruitElem.bookMark);
  const handleOnClick = () => {
    history.push(`/projects/${recruitElem.projectId}`);
  };

  const handleBookMark = (e) => {
    e.stopPropagation();
    userService
      .setBookMark(user.userId, recruitElem.projectId, !bookMarkMode)
      .then((response) => {
        console.log('handleBookMark', response);
        setBookMarkMode(!bookMarkMode);
      });
  };

  useEffect(() => {
    setBookMarkMode(recruitElem.bookMark);
  }, [recruitElem.bookMark]);
  return (
    <CardContainer onClick={handleOnClick}>
      <BookMarkIcon
        onClick={(e) => {
          handleBookMark(e);
        }}>
        {bookMarkMode ? (
          <BookMarkTrue height='19px'></BookMarkTrue>
        ) : (
          <BookMarkFalseIcon height='19px'></BookMarkFalseIcon>
        )}
      </BookMarkIcon>
      <CardContents>
        <Details>
          <Title>{recruitElem.title}</Title>
          <RecruitStacksView
            stackList={recruitElem.stackList}></RecruitStacksView>
          <Description>{recruitElem.description}</Description>
        </Details>
        <UnitInfo capacity={recruitElem.capacity} view={recruitElem.view}>
          <ApplyBtn status={recruitElem.status}>
            {recruitElem.status === 0
              ? '지원하기' //이거 클릭하면 채팅하겠냐는 창 띄우고 채팅열어주기
              : '모집종료'}
          </ApplyBtn>
        </UnitInfo>
      </CardContents>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 3.5rem 2rem 2rem;
  margin: 16px 48px 32px 48px;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px rgba(207, 207, 207, 0.507);
  // border: 1px solid #EAEAEA;
  background-color: #fff;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  overflow: auto;

  &:hover {
    transform: scale(1.01);
  }
`;

const BookMarkIcon = styled.div`
  margin: 8px 24px 8px 0;
`;

const CardContents = styled.div`
  display: flex;
  flex: 10;
  justify-content: space-between;
  align-items: center; //나중에 제목 길이 길게 테스트해보고 문제있으면 flex-end로 바꿔
  flex-wrap: wrap;
  // flex-shrink: 1;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Details = styled.div`
  align-right: 8px;
  display: flex;
  flex-direction: column;
  max-width: 580px;
  @media screen and (max-width: 991px) {
    align-items: center;
  }
`;

const Title = styled.div`
  /* height: 3.75rem; */
  max-width: 40rem;
  font-size: 1.25rem;
  font-weight: bold;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (max-width: 991px) {
    align-items: center;
  }
`;

const Description = styled.div`
  max-width: 594px;
  margin: 16px 0 0 0;
  font-size: 14px;
  display: -webkit-box;
  white-space: normal;
  height: 20px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (max-width: 991px) {
    align-items: center;
    text-align: center;
  }
`;

const ApplyBtn = styled.button`
  background-color: ${(props) => (props.status === 0 ? '#6F9ACD' : '#CCCCCC')};
  color: ${(props) => (props.status === 0 ? 'rgb(238, 238, 238)' : '#909090')};
  cursor: pointer;
  width: 164px;
  height: 32px;
  font-size: 14px;
  border-radius: 8px;
  border: 0;
  outline: 0;
  margin-top: 4px;
`;

const BookMarkFalseIcon = styled(BookMarkFalse)`
  &:hover {
    path {
      fill: #999999;
    }
  }
`;

export default RecruitCard;
