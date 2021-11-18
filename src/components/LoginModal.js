import React from 'react'
import style from '../style/LoginModal.module.scss'

function LoginModal({visible, showModal, closeModal}) {
  return (
    <div className={style.ModalOverlay} onClick={closeModal}>
      <div className={style.ModalWrapper} >
        <div className={style.ModalInner} onClick={e => e.stopPropagation()}>
          <div className={style.closeSection}>
            <img alt="닫기" src="/img/close.svg" onClick={closeModal} ></img>
          </div>
          <div className={style.MadalContents}>
            <div className={style.logoSection}>
              <img className={style.logo} alt="로고" src="/img/logo520.svg"></img>
            </div>
            <div className={style.startText}>팀원 모집부터 프로젝트 관리까지<br/>포트폴리안에서 시작해보세요!</div>
            <div className={style.loginText}>소셜 계정으로 시작하기</div>
            <div className={style.loginButton}>
              <img className={style.googleICon} alt="구글로그인" src="/img/google.svg" onClick={ () => {} }></img>
              <img className={style.kakaoIcon} alt="카카오로그인" src="/img/kakao.svg" onClick={ () => {} }></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
