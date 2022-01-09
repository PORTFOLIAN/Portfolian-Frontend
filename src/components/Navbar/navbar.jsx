import React, { useEffect, useState } from 'react'
// import GoogleButton from './GoogleButton'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import LoginModal from '../LoginModal/loginModal';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../service/auth_service';
import { clearUser, fetchUserByRefreshToken } from '../../modules/user';
import { clearStep } from '../../modules/loginStep';
import UserOn from '../UserOn/userOn';
import SearchBar from '../SearchBar/searchBar';
import InputMoblie from '../InputMoblie/inputMoblie';



function Navbar() {
  const dispatch = useDispatch();
  // const status = localStorage.getItem("token") === null ? false:true;
  const user = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [inputMoblie, setInputMoblie] = useState(false);
  const [keyword, setKeyword] = useState("");

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

  const handleInputMoblie = ()=> {
    setInputMoblie(!inputMoblie);
  }

  const handleInputKeyword = (e) => {
    setKeyword(e.target.value)
  }

  //지금은 리프레시토큰이 저장안돼있는구조라서 일단 주석처리~
  // useEffect(()=>{
  //   if(user.nickName) {
  //     dispatch(fetchUserByRefreshToken(user)).then((response) => {
  //       //안에 내용 적어주~
  //       console.log("fetchUserByRefeshToken response: ", response);
  //     })
  //   }
  // }, [dispatch, user.nickName, user]);

  return (
    <>
      <div className={style.container}>
        <div className={style.navBody}>
          <Link to="/" className={style.logo}>
            <img  alt="LOGO" src="img/logo520.png"/>
          </Link>
          <div className={style.contents}>
            <SearchBar handleInputMoblie={handleInputMoblie} keyword={keyword} handleInputKeyword={handleInputKeyword}/>
            {
            !user.nickName
            ? <button className={style.loginButton} onClick={showModal}>로그인</button>
            : <UserOn handleLogout={handleLogout} />
            }
          </div>
        </div>
        {/* {
          inputMoblie 
          ? <InputMoblie handleInputMoblie={handleInputMoblie} keyword={keyword} handleInputKeyword={handleInputKeyword}></InputMoblie>
          : null
        } */}
        <InputMoblie handleInputMoblie={handleInputMoblie} keyword={keyword} handleInputKeyword={handleInputKeyword}></InputMoblie>
      </div>
      {
        openModal && <Modal closeModal={closeModal}> <LoginModal closeModal={closeModal} ></LoginModal> </Modal>
      }
      {/* <Modal width="100px" height="200px" component={com()}></Modal> */}
    </>
  )
}

export default Navbar