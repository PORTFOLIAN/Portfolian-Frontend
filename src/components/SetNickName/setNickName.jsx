import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { nextStep, previousStep, setSignUpUser } from '../../modules/loginStep';
import { addUserNickName } from '../../modules/user';
import userService from '../../service/user_service';
import { ReactComponent as Prev } from '../asset/prev.svg';

const NicNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const PrevBtn = styled.div`
  margin-right: 1.2rem;
`;

const SetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SetText = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: #757575;
`;

const DescText = styled.div`
  font-size: 0.8rem;
  color: #909090;
`;

const InputNicName = styled.input`
  width: 80%;
  border-color: #cccccc;
  padding-bottom: 2px;
  margin-top: 30px;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;

const SubmitNicName = styled.button`
  margin-top: 30px;
  color: #fff;
  background-color: #6f9acd;
  /* background-color:#2d303b; */
  border: none;
  padding: 10px 20px;
  border-radius: 0.2rem;
  cursor: pointer;
  font-weight: bold;
`;

function SetNickName() {
  const [nickName, setNickName] = useState('');
  const dispatch = useDispatch();
  const loginStep = useSelector((state) => state.loginStep);
  const onInput = (value) => {
    if (value.length <= 10) {
      setNickName(value);
    }
  };
  const handleSignUp = async () => {
    const beforeNickName = nickName.replace(/ /gi, '');
    if (nickName.length === 0) {
      toast.info('닉네임을 입력해주세요!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
        autoClose: 3000,
        icon: '😐',
      });
      return;
    }
    if (beforeNickName.length !== nickName.length) {
      toast.info('닉네임에 공백이 들어갈 수 없습니다.', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
        autoClose: 3000,
        icon: '😐',
      });
      return;
    }

    const userId = loginStep.userId;

    dispatch(setSignUpUser({ key: 'nickName', value: nickName })); //이건 로그인스텝
    dispatch(
      addUserNickName({
        //이건 유저
        userId,
        nickName,
      }),
    );
    dispatch(nextStep()); //이건 로그인스텝
  };

  const handledPrevBtn = async () => {
    //회원탈퇴시킬까?
  };

  return (
    <>
      <NicNameContainer>
        <PrevBtn onClick={() => dispatch(previousStep())}>
          <Prev width="1rem" height="1.5rem"></Prev>
        </PrevBtn>
        <SetContainer>
          <SetText>닉네임을 설정해주세요. (최대 10자)</SetText>
          <DescText>닉네임은 마이페이지에서 변경할 수 있습니다.</DescText>
          <InputNicName
            type="text"
            name="nickName"
            maxLength="10"
            value={nickName}
            onChange={(e) => {
              onInput(e.target.value);
            }}
          />
          <SubmitNicName onClick={handleSignUp} name="submit">
            완료
          </SubmitNicName>
        </SetContainer>
      </NicNameContainer>
    </>
  );
}

export default SetNickName;
