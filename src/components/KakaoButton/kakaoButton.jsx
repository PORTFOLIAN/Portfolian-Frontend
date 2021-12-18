import React, { useEffect } from 'react'
import styled from 'styled-components'
// import {KAKAO_AUTH_URL} from '../../../store/OAuth'; //REST API ver

const KakaoBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const KakaoImg = styled.img`
  width: 4rem;
  margin: 1rem;
`;

function KakaoButton() {
  const {Kakao} = window;
  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/auth/kakao/callback'
    })
  }

  return (
    <KakaoBtn onClick={loginWithKakao}>
      <KakaoImg alt="카카오로그인" src="img/kakao.svg"></KakaoImg>
    </KakaoBtn>
  )
}


export default KakaoButton