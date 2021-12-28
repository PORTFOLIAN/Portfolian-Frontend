import React from 'react'
import KakaoLogin from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import KakaoButton from '../KakaoButton/kakaoButton';
import GoogleLogin from 'react-google-login';
import user, { fetchUserById, fetchUserByRefreshToken, setUserInfo } from "../../modules/user";
import { nextStep, setSignUpUser } from "../../modules/loginStep"
import { useSelector } from 'react-redux';

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

 
function BeforeLogin({ closeModal }) {
  // const kakaoClientId = process.env.REACT_APP_KAKAO_LOGIN_API_KEY;
  const kakaoClientId = "f853e37c9b7fff7ae2a6004db6739831";
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);

  //카카오서버에 로그인 요청 성공시
  const kakaoOnSuccess = async (response) => {
    const accessToken = response.response.access_token;
    const userData = { code: accessToken, social: "kakao" };
    // console.log(accessToken);
    await dispatch(fetchUserById(userData)).then((response)=>{ 
    //   //fetchUserById에서 온 결과가 response로 들어감
    //   //response: 유저아이디, refreshtoken, accesstoken
      const userId = response.payload.userId;
      console.log("userId: ", userId);
      if (response.payload.isNew === false) { //지금은 로컬에 저장안댐(?)
        dispatch(setUserInfo(userId));
        closeModal();
      } //유저 존재, 닉넴설정한 유저라는거 어떻게 알 수 있을까...
      else { //첫로그인
        dispatch(setSignUpUser({ key: "userId", value: userId}));
        dispatch(nextStep());
      }
    })
  }

  //카카오서버에 로그인 요청 실패시
  const kakaoOnFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <StartTxt>팀원 모집부터 프로젝트 관리까지<br/>포트폴리안에서 시작해보세요!</StartTxt>
      <LoginTxt>소셜 계정으로 시작하기</LoginTxt>
      <LoginBtn>
        {/* <GoogleLogin>

        </GoogleLogin> */}
        {/* <GoogleBtn alt="구글로그인" src="/img/google.svg" onClick={ () => {} }></GoogleBtn> */}
        {/* <img className={style.kakaoIcon} alt="카카오로그인" src="/img/kakao.svg" onClick={ () => {} }></img> */}
        {/* <KakaoButton></KakaoButton> */}
        <KakaoLogin 
          token={ kakaoClientId }
          onSuccess={ kakaoOnSuccess } 
          onFailure={ kakaoOnFailure }
          style={{width: "4rem", height: "4rem", display: "flex",margin: "1rem",justifyContent: "center", backgroundColor: "transparent", border: "none", borderRadius: "100px"}}
        >
          <KakaoButton></KakaoButton>
        </KakaoLogin>
      </LoginBtn>
    </>
  )
}

export default BeforeLogin
