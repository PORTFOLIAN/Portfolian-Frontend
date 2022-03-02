import React, { useEffect } from 'react';
import styled from 'styled-components';
// import {KAKAO_AUTH_URL} from '../../../store/OAuth'; //REST API ver

const KakaoBtn = styled.div`
  text-decoration: none;
  cursor: pointer;
`;

const KakaoImg = styled.img`
  width: 4rem;
  // margin: 1rem;
`;

function KakaoButton({ onClick }) {
  return (
    <KakaoBtn>
      <KakaoImg alt='카카오로그인' src='img/kakao.svg'></KakaoImg>
    </KakaoBtn>
  );
}

export default KakaoButton;
