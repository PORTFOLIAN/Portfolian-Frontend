import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectStackList from '../ProjectStackList/projectStackList';
import RecruitStacksSelection from '../RecruitStacksSelection/recruitStacksSelection';
import TextareaAutosize from 'react-autosize-textarea/lib';
import { ReactComponent as GithubIcon } from '../asset/github.svg';
import { ReactComponent as MailIcon } from '../asset/mail.svg';
import { ReactComponent as CloseIcon } from '../asset/close.svg';
import { toast } from 'react-toastify';

function EditProfile({ userId, profileRead, setEditMode }) {
  // const dispatch = useDispatch();
  const [profiles, setProfiles] = useState({
    photo: profileRead.photo,
    stackList: profileRead.stackList,
    nickName: profileRead.nickName,
    mail: profileRead.mail,
    github: profileRead.github,
    description: profileRead.description,
  });

  const [selectStack, setSelectStack] = useState(false);

  // note: 이메일 유효성 검사 + 닉네임 없을 때 검사는 제출할 때!
  const handleInputProfiles = (e) => {
    let { value, name } = e.target;
    if (name === 'nickName') {
      if (value.length > 10) {
        toast.info('닉네임은 최대 10자입니다.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'light',
          autoClose: 3000,
        });
        return;
      }
    }
    if (name === 'description') {
      if (value.length > 100) {
        return;
      }
    }
    setProfiles({
      ...profiles,
      [name]: value,
    });

    // dispatch(리듀스만들어서디스패치해{key: name, value: e.target.value})); <= 엥 이건 다 고치고 저장할 때!
  };

  return (
    <>
      <Container>
        <div>
          <div>
            <ImgContainner>
              <ProfileImg src={profiles.photo} alt='photo' />
            </ImgContainner>
          </div>
          <input
            type='file'
            accept='image/*'
            name='photo'
            onChange={() => {}}></input>
          <div>
            <button>사진 선택</button>
            <button>삭제</button>
          </div>
        </div>
        <ProfileContents>
          <div>
            <ProjectStackList stackList={profiles.stackList} profile={true} />
            <SelectStackBtn onClick={() => setSelectStack(!selectStack)}>
              기술 태그 선택하기 (최대 7개)
            </SelectStackBtn>
            {selectStack ? (
              <SelectStackContainer>
                <CloseSelectStackContainer
                  onClick={() => setSelectStack(false)}>
                  <CloseIcon style={{ width: '0.7rem' }}></CloseIcon>
                  <CloseText>선택창 닫기</CloseText>
                </CloseSelectStackContainer>
                <RecruitStacksSelection
                  profile={true}
                  stackList={profiles.stackList}
                  setProfiles={setProfiles}
                  profiles={profiles}
                />
              </SelectStackContainer>
            ) : null}
          </div>
          <NickNameInput
            type='text'
            placeholder='닉네임을 설정하세요.'
            name='nickName'
            value={profiles.nickName}
            onChange={handleInputProfiles}></NickNameInput>
          <ContentsInputs
            placeholder='간단한 소개를 작성해주세요!'
            name='description'
            value={profiles.description}
            onChange={handleInputProfiles}
          />
          <SocialContainer>
            <SocialContent>
              <MailIcon style={{ width: '1.5rem' }}></MailIcon>
              <SocialInput
                value={profiles.mail}
                name='mail'
                placeholder='이메일'
                onChange={handleInputProfiles}></SocialInput>
            </SocialContent>
            <SocialContent>
              <GithubIcon style={{ width: '1.5rem' }}></GithubIcon>
              <SocialInput
                value={profiles.github}
                name='github'
                placeholder='깃허브 주소'
                onChange={handleInputProfiles}></SocialInput>
            </SocialContent>
          </SocialContainer>
        </ProfileContents>
      </Container>
      <button onClick={() => setEditMode(false)}> 취소 </button>
    </>
  );
}

export default EditProfile;

const Container = styled.div`
  width: 90%;
  margin-top: 10rem;
  margin-left: 2rem;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 768px) {
    margin: 2rem auto;
    justify-content: center;
  }
`;
const ImgContainner = styled.div`
  width: 10rem;
  height: 10rem;
  border: 3px solid #f0f1d9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 565px) {
    width: 40vw;
    height: 40vw;
  }
`;

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
`;

const ProfileContents = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const SelectStackBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: #f4f4f4;
  border-radius: 4px;
  color: #6f9acd;
  font-weight: 500;
`;

const CloseSelectStackContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const CloseText = styled.span`
  font-size: 14px;
  color: #727272;
`;

const SelectStackContainer = styled.div`
  position: absolute;
  background-color: #fff;
  max-width: 45rem;
  border: 1px solid #f3eeee;
  box-shadow: 3px 8px 17px 0px rgb(104 104 104 / 16%);
  border-radius: 8px;
  margin-top: 1rem;
  padding: 1rem;
  margin-right: 1rem;
  z-index: 10;
`;

const NickNameInput = styled.input`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: gray;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #acacac;
  }
  :-ms-input-placeholder {
    color: #acacac;
  }
`;

const ContentsInputs = styled(TextareaAutosize)`
  font-size: 14px;
  margin-bottom: 0.5rem;
  max-width: 490px;
  color: gray;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SocialInput = styled.input`
  flex: 0.7;
  padding-bottom: 4px;
  color: gray;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #acacac;
  }
  :-ms-input-placeholder {
    color: #acacac;
  }
`;
