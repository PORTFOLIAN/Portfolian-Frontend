import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProjectStackList from '../ProjectStackList/projectStackList';
import {ReactComponent as PencilIcon} from '../asset/pencil.svg';
import {ReactComponent as GithubIcon} from '../asset/github.svg';
import {ReactComponent as MailIcon} from '../asset/mail.svg';

/*
유저프로필 관련 데이터 받아오는 컨트롤러 컴포넌트 (받아와서 뷰 컴포넌트로 props로 보내주기)
설정모드 컴포넌트 or 설정아닌모드 컴포넌트 띄워주는거 switch로 만들어주고
유저 === 프로필유저 일 때 설정모드면 버튼 '저장' or 설정아닌모드면 버튼 '수정' (로그인 유저 정보, 클릭한 프로필 유저 정보 필요)


*/
/* 자기 프로필인데 정보 안들어있으면 정보 넣어주라고 하기 */

function ProfileDetail({userId}) {
  const profileRead = useSelector((state) => state.profileRead);
  const [editMode, setEditMode] = useState(false);
  const [stacks, setStacks] = useState(profileRead.stackList);
  console.log("profileDetail: ",profileRead);

  return (
    <Container>
      <ImgContainner>
        <ProfileImg src={profileRead.photo} alt="photo"/>
      </ImgContainner>
      <ProfileContents>
        <ProjectStackList stackList={stacks}/>
        <NickNameText>{ profileRead.nickName }</NickNameText>
        <DescriptionText>{profileRead.description} 프로필 소개 입력 부탁</DescriptionText>
        <IconCentainer>
          <GithubIcon/>
          <MailIcon/>
          <PencilIcon/>
        </IconCentainer>
      </ProfileContents>
    </Container>
  );
}

export default ProfileDetail;

const Container = styled.div`
  width: 90%;
  margin-top: 10rem;
  margin-left: 2rem;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 768px){
    margin: 2rem auto;
    justify-content: center;
  }
`

const ImgContainner = styled.div`
  width: 12rem;
  height: 12rem;
  border: 2px solid #c5c5c5;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 565px) {
    width: 40vw;
    height: 40vw;
  }
`


const ProfileImg = styled.img`
  border-radius: 100%;
  width: 97%;
  height: 97%;
  object-fit: cover;
  
  /* border: 4px solid #c5c5c5; */
  /* @media screen and (max-width: 565px){
    width: 98%;
    height: 98%;
  } */
`

const ProfileContents = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

const NickNameText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0.5rem;
`

const DescriptionText = styled.div`
  max-width: 480px;
`

const IconCentainer = styled.div`
  max-width: 140px;
  display: flex;
  justify-content: space-between;
`
