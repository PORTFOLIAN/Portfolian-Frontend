import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectStackList from '../ProjectStackList/projectStackList';
import RecruitStacksSelection from '../RecruitStacksSelection/recruitStacksSelection';

function EditProfile({userId, profileRead, setEditMode}) {
  const [stacks, setStacks] = useState(profileRead.stackList);
  const [selectStack, setSelectStack] = useState(false);
  return (
    <>
    <Container>
      <div>
        <ImgContainner>
          <ProfileImg src={profileRead.photo} alt="photo"/>
        </ImgContainner>
        {/* <input type='file' id='profileImg' accept='image/*'></input> */}
      </div>
      <ProfileContents>
        <div>
          <ProjectStackList stackList={stacks}/>
          <button onClick={() => setSelectStack(true)}>기술 태그 선택하기 (최대 7개)</button>
        </div>
        <input type='text' placeholder='닉네임을 설정하세요.' value={profileRead.nickName}></input>
        <textarea placeholder={profileRead.description}></textarea>
      </ProfileContents>
    </Container>
    <button onClick={()=>setEditMode(false)}> 취소 </button>
    </>
  )
}

export default EditProfile

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
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
