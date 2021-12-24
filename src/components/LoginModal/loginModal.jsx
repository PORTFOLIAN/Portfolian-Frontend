import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import loginStep from '../../modules/loginStep';
import BeforeLogin from '../BeforeLogin/beforeLogin';
import SetNickName from '../SetNickName/setNickName';

//Nav bar 에 이거 임포트하고 모달 호출할 때 얘 프롭스로 넣어주기

const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  width: 12rem;
  margin: 3rem auto 1rem auto;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const CloseBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.img`
  margin: 16px;
  cursor: pointer;
`;

const BEFORE_LOGIN = 1;
const SET_NICKNAME = 2;
// const SET_SIGNUPEND = 3;

function LoginModal({closeModal}) {
  const loginStep = useSelector((state) => state.loginStep.currentStep);
  const renderByLoginStep = (loginStep) => {
    switch (loginStep) {
      case BEFORE_LOGIN:
        return (
          <BeforeLogin closeModal={closeModal}> </BeforeLogin>
        );
      case SET_NICKNAME:
        return <SetNickName></SetNickName>;
      default:
        closeModal();
        return <></>;
    }
  }

  return (
    <>
      <CloseBar>
        <CloseBtn alt="닫기" src="/img/close.svg" onClick={closeModal} ></CloseBtn>
      </CloseBar>
      <LoginContainer>
              <Logo>
                <LogoImg alt="로고" src="/img/logo520.svg"></LogoImg>
              </Logo>
              {renderByLoginStep(loginStep)}
              {/* 이 아래부분을 따로 빼삼, 왜냐면 로그인 단계에 따라서 다른 화면 보여줘야하니까~ */}
              {/* <StartTxt>팀원 모집부터 프로젝트 관리까지<br/>포트폴리안에서 시작해보세요!</StartTxt>
              <LoginTxt>소셜 계정으로 시작하기</LoginTxt>
              <LoginBtn>
                <GoogleBtn alt="구글로그인" src="/img/google.svg" onClick={ () => {} }></GoogleBtn>
                <KakaoButton></KakaoButton>
              </LoginBtn> */}
      </LoginContainer>
      </>
  )
}

export default LoginModal
