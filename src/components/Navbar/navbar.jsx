import React, { useEffect, useState } from 'react';
import style from './Navbar.module.scss';
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
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import ChatContainer from '../ChatContainer/chatContainer';
import ChatList from '../ChatList/chatList';
import ChatRoom from '../ChatRoom/chatRoom';
// import ChatContents from '../ChatContents/chatContents';

function Navbar() {
  const dispatch = useDispatch();
  // const status = localStorage.getItem("token") === null ? false:true;
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [inputMoblie, setInputMoblie] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [chatSwitch, setchatSwitch] = useState(false);
  const [roomMode, setRoomMode] = useState(false); //채팅 리스트모드인지 룸입장한모드인지 체크하는 state
  const [roomId, setRoomId] = useState();
  const [otherUser, setOtherUser] = useState();

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const handleLogout = async () => {
    console.log('handlelogout');
    await authService.logout();
    dispatch(clearUser());
    dispatch(clearStep());
    console.log('handleLogout');
    authService.resetToken();
  };

  const handleInputMoblie = () => {
    setInputMoblie(!inputMoblie);
  };

  const handleInputKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleChat = (e) => {
    setchatSwitch(!chatSwitch);
  };

  const handleChatRoomDetail = (clickRoomId, clickOtherUser) => {
    setRoomId(clickRoomId);
    setOtherUser(clickOtherUser);
    // setRoomMode(true);
  };

  useEffect(() => {
    // console.log("nabvar useEffect user.nickName: ", user.nickName);
    if (user.nickName) {
      dispatch(fetchUserByRefreshToken(user.userId)).then((response) => {
        //안에 내용 적어주~(리프레시토큰 만료됐을 때 메인페이지로 넘겨주는거~~)
        if (response.payload.code !== 1) {
          history.push('/');
          dispatch(clearUser());
          toast.error('로그인이 만료되었습니다.', {
            position: 'top-center',
            autoClose: 3000,
          });
        }
        // console.log("fetchUserByRefeshToken response: ", response);
      });
    }
  }, [user.nickName]);

  return (
    <>
      <div className={style.container}>
        <div className={style.navBody}>
          <Link to='/' className={style.logo}>
            <img alt='LOGO' src='/img/logo520.svg' />
          </Link>
          <div className={style.contents}>
            <SearchBar
              handleInputMoblie={handleInputMoblie}
              keyword={keyword}
              handleInputKeyword={handleInputKeyword}
            />
            {!user.nickName ? (
              <button className={style.loginButton} onClick={showModal}>
                로그인
              </button>
            ) : (
              <UserOn handleLogout={handleLogout} handleChat={handleChat} />
            )}
          </div>
        </div>
        {/* {
          inputMoblie 
          ? <InputMoblie handleInputMoblie={handleInputMoblie} keyword={keyword} handleInputKeyword={handleInputKeyword}></InputMoblie>
          : null
        } */}
        <InputMoblie
          handleInputMoblie={handleInputMoblie}
          keyword={keyword}
          handleInputKeyword={handleInputKeyword}></InputMoblie>
      </div>
      {openModal && (
        <Modal closeModal={closeModal}>
          <LoginModal closeModal={closeModal}></LoginModal>
        </Modal>
      )}
      {chatSwitch && (
        <ChatContainer onClickChat={handleChat} roomMode={roomMode}>
          {!roomMode ? (
            <ChatList handleChatRoomDetail={handleChatRoomDetail}></ChatList> //roomId, otherUserId 받고 roomMode 바꿔주기..?!
          ) : roomId ? (
            <ChatRoom roomId={roomId} user={otherUser}></ChatRoom>
          ) : null}
        </ChatContainer>
      )}
      {/* <Modal width="100px" height="200px" component={com()}></Modal> */}
    </>
  );
}

export default Navbar;
