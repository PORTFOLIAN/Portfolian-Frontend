import React, { useEffect, useState } from 'react'
// import GoogleButton from './GoogleButton'
import style from './Navbar.module.scss'
import { Link, useHistory } from 'react-router-dom';
import Modal from '../Modal/modal';
import LoginModal from '../LoginModal/loginModal';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../service/auth_service';
import { clearUser, fetchUserByRefreshToken } from '../../modules/user';
import { clearStep } from '../../modules/loginStep';


function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const status = localStorage.getItem("token") === null ? false:true;
  const user = useSelector((state) => state.user);
  let [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }
  const handleLogout = async() => {
    await authService.logout();
    dispatch(clearUser());
    dispatch(clearStep());
    authService.resetToken();

  }

  //지금은 리프레시토큰이 저장안돼있는구조
  // useEffect(()=>{
  //   if(user.nickName) {
  //     dispatch(fetchUserByRefreshToken(user)).then((response) => {
  //       //안에 내용 적어주~
  //       console.log("fetchUserByRefeshToken response: ", response);
  //     })
  //   }
  // }, [dispatch, history, user.nickName, user]);

  return (
    <>
      <div className={style.container}>
        <div className={style.navBody}>
          <Link to="/" className={style.logo}>
            <img  alt="LOGO" src="img/logo520.svg" />
          </Link>
          <div className={style.contents}>
            <div>검색창은 여기임</div>
            {
            !user.nickName
            ? <button className={style.loginButton} onClick={showModal}>로그인</button>
            : <>
              <div>프로필</div>
              <div>메신저</div>
              <div>알람자리임요~</div>
              <button onClick={handleLogout} >로그아웃임시자리</button>
            </>
            }
          </div>
        </div>
      </div>
      {
        openModal && <Modal closeModal={closeModal}> <LoginModal closeModal={closeModal}></LoginModal> </Modal>
      }
      {/* <Modal width="100px" height="200px" component={com()}></Modal> */}
    </>
  )
}

export default Navbar