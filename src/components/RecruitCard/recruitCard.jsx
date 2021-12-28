import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BookMarkTrue} from "../asset/bookmark_true.svg";
import { ReactComponent as BookMarkFalse} from "../asset/bookmark_false.svg";
import RecruitStacks from '../RecruitStacks/recruitStacks';
import UnitInfo from '../UnitInfo/unitInfo';
import recruit from '../../service/recruit_service';



function recruitCard({ key, recruitElem }) {
  return (
    <CardContainer>
      <BookMarkIcon 
      // onClick={ 북마크 설정하는 api통신}
      >
        {
          recruitElem.bookMark
          ? <BookMarkTrue height="19px"></BookMarkTrue>
          : <BookMarkFalse height="19px"></BookMarkFalse>
        }
      </BookMarkIcon>
      <CardContents>
        <Details>
          <Title>{recruitElem.title}</Title>
          <RecruitStacks stackList={recruitElem.stackList}></RecruitStacks>
          <Description>{recruitElem.description}</Description>
        </Details>
        <UnitInfo capacity={recruitElem.capacity} view={recruitElem.view} >
          <ApplyBtn status={recruitElem.status}>
            {
            recruitElem.status === 0 
            ? '지원하기'
            : '모집종료'
            }
          </ApplyBtn>
        </UnitInfo>
      </CardContents>
      {/* <div className={style.bookmarkIcon} onClick={() => {
        props.dispatch( {type: 'bookMark', data: {id: props.a.projectIdx}} )
      }}>
        {props.a.bookMark === false
        ? <img alt="bookmark" src="img/bookmark_false.svg"></img>
        : <img alt="bookmark" src="img/bookmark_true.svg"></img>}
      </div>

      <div className={style.contentsArea}>
          <div className={style.details}>
            <div className={style.title}>{ props.a.title }</div>
            <div className={style.tagArea}>
              {
                props.a.stackList.map((stack)=>{
                  return (<MakeTagDiv stack={stack}/>)
                })
              }
            </div>
            <div className={style.description}>
              {props.a.description}
            </div>
          </div>
      </div> */}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 3.5rem 2rem 2rem;
  margin: 0 8px 32px 8px;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px rgba(207, 207, 207, 0.507);
  // border: 1px solid #EAEAEA;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
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
  align-items: center; //나중에 제목 길이 길게 테스
  flex-wrap: wrap;
  // flex-shrink: 1;
  @media screen and (max-width: 966px){
    flex-direction: column;
    align-items: center;
  }
`;

const Details = styled.div`
  argin-right: 8px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 966px){
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (max-width: 966px){
    align-items: center;
  }
`;

const Description = styled.div`
  max-width: 600px;
  margin: 8px 0 0 0;
  font-size: 14px;
  display: -webkit-box;
  white-space: normal;
  height: 40px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (max-width: 966px){
    align-items: center;
  }
`

const ApplyBtn = styled.button`
  background-color: ${props => (props.status === 0 ? '#6F9ACD' : '#CCCCCC')};
  color: ${props => (props.status === 0 ? 'rgb(238, 238, 238)' : '#909090')};
  cursor: pointer;
  width: 164px;
  height: 32px;
  font-size: 14px;
  border-radius: 8px;
  border: 0;
  outline: 0;
  margin-top: 4px;
`;

export default recruitCard