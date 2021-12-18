import React, { useState } from 'react'
// import GoogleButton from './GoogleButton'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import LoginModal from '../LoginModal/loginModal';


function Navbar() {
  const status = localStorage.getItem("token") === null ? false:true;
  let [isLogin, setIsLogin] = useState(status);
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
          <Link to="/" className={style.logo}>
            <img  alt="LOGO" src="img/logo520.svg" />
          </Link>
          <div className={style.contents}>
            {
            !isLogin
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
        openModal && <Modal closeModal={closeModal}> <LoginModal></LoginModal> </Modal>
      }
      {/* <Modal width="100px" height="200px" component={com()}></Modal> */}
    </>
  )
}

export default Navbar