import React, { useEffect } from 'react'
import OwnerStackSelection from '../OwnerStackSelection/ownerStackSelection'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'


function SetOwnerStack({ handleOwnerStackModal, handleSetStacks, handleClickSubmit }) {
  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset"
      };
  }, []);

  return (
    <ModalContentsContainer>
      <Text><strong>{user.nickName}님</strong>이 사용할 기술을 <br />아래의 태그에서 골라주세요.</Text>
      <SubText>추후에 프로젝트 페이지에서<br/>변경하실 수 있습니다.</SubText>
      <OwnerStackSelection handleSetStacks={handleSetStacks}/>
      <BtnContainer>
        <BackBtn onClick={handleOwnerStackModal}>뒤로가기</BackBtn>
        <SaveBtn onClick={handleClickSubmit}>등록하기</SaveBtn>
      </BtnContainer>
    </ModalContentsContainer>
  )
}

export default SetOwnerStack

const ModalContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`

const Text = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`

const SubText = styled(Text)`
  color: #909090;
  font-size: 12px;
`

const BtnContainer = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Button = styled.button`
  border: none;
  padding: 0.25rem 1rem;
  border-radius: 6px;
  font-size: 12px;
`

const BackBtn = styled(Button)`
  background-color: #FFF;
  border: 1px solid #6f9acd;
  color: #6f9acd;
`

const SaveBtn = styled(Button)`
  background-color: #6f9acd;
  color: #fff;
`

