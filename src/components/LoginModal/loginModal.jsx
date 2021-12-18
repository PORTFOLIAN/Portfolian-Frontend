import React from 'react'
import styled from 'styled-components'
import KakaoButton from '../KakaoButton/kakaoButton';

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

const StartTxt = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const LoginTxt = styled.div`
  text-align: center;
  font-size: 12px;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-contents: center;
`;

//이건 나중에 컴포넌트로 따로 빼줄거임
const GoogleBtn = styled.img`
  width: 4rem;
  margin: 1rem;
  cursor: pointer;
`;

const SOCIAL_LOGIN = 1;
const SET_NICKNAME = 2;
const SIGNUP_END = 3;

function LoginModal() {
  return (
    <LoginContainer>
            <Logo>
              <LogoImg alt="로고" src="/img/logo520.svg"></LogoImg>
            </Logo>
            <StartTxt>팀원 모집부터 프로젝트 관리까지<br/>포트폴리안에서 시작해보세요!</StartTxt>
            <LoginTxt>소셜 계정으로 시작하기</LoginTxt>
            <LoginBtn>
              <GoogleBtn alt="구글로그인" src="/img/google.svg" onClick={ () => {} }></GoogleBtn>
              {/* <img className={style.kakaoIcon} alt="카카오로그인" src="/img/kakao.svg" onClick={ () => {} }></img> */}
              <KakaoButton></KakaoButton>
            </LoginBtn>
    </LoginContainer>
  )
}

export default LoginModal
