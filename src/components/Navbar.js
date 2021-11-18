import React, { useState } from 'react'
import GoogleButton from './GoogleButton'
import style from '../style/Navbar.module.scss'
import LoginModal from './LoginModal';

function Navbar() {
  let [login, setLigin] = useState(false);
  let [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.navBody}>
          <div className={style.logo}>
            <img  alt="LOGO" src="img/logo520.svg" />
          </div>
          <div className={style.contents}>
            {
            !login
            ? <button className={style.loginButton} onClick={showModal}>로그인</button>
            : <><div>검색창</div>W
              <div>프로필</div>
              <div>메신저</div>
              <div>알람자리임요~</div></>
            }
          </div>
        </div>
      </div>
      {
        openModal && <LoginModal visible={openModal} showModal={showModal} closeModal={closeModal} />
        
      }
    </>
  )
}

export default Navbar