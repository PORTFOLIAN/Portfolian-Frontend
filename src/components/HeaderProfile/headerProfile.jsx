import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {ReactComponent as Triangle} from "../asset/triangle.svg"
import DropDown from '../DropDown/dropDown';

function HeaderProfile({handleLogout}) {
  const user = useSelector((state)=>state.user);
  const [DropDownSwitch, setDropDownSwitch] = useState(false);
  const DropDownRef = useRef();

  const handleUserProfile = () => {
    setDropDownSwitch(!DropDownSwitch);
  }
  const handleCloseDropDown = useCallback((e)=> {
    if (DropDownSwitch && (!DropDownRef.current || !DropDownRef.current.contains(e.target))) {
      setDropDownSwitch(false);
    }
  }, [DropDownSwitch, DropDownRef]);

  useEffect(() => {
    window.addEventListener("click", handleCloseDropDown);
    return () => {
      window.removeEventListener("click", handleCloseDropDown);
    }
  }, [handleCloseDropDown])

  return (
    <>
      <UserContainer onClick={handleUserProfile}>
        {/* <UserPhoto src={user.imageUrl}/>  //나중에 기본 유알엘 설정되면 이걸루!*/}
        <UserPhoto alt="UserImg" src="img/DefaultUser.svg"></UserPhoto>
        <UserNickName>{user.nickName}</UserNickName>
        <Triangle/>
        {DropDownSwitch && <DropDown handleLogout={handleLogout}/>}
      </UserContainer>
    </>
  )
}

export default HeaderProfile

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 30px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
const UserPhoto = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  height: 2rem;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    height: 1.6rem;
  }
`
const UserNickName = styled.div`
  margin-right: 4px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`