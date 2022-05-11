import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Kakao } from '../asset/kakao.svg';
// import {KAKAO_AUTH_URL} from '../../../store/OAuth'; //REST API ver

const KakaoBtn = styled.div`
  text-decoration: none;
  cursor: pointer;
`;

const KakaoImg = styled(Kakao)`
  width: 4rem;
  height: 4rem;
`;

function KakaoButton({ onClick }) {
  return (
    <KakaoBtn>
      <KakaoImg></KakaoImg>
    </KakaoBtn>
  );
}

export default KakaoButton;
