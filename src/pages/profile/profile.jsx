import React, { useCallback, useEffect } from 'react';
import style from './Profile.module.scss';
import Navbar from '../../components/Navbar/navbar';
import ProfileDetail from '../../components/ProfileDetail/profileDetail';
import ProfileProject from '../../components/ProfileProject/profileProject';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import userService from '../../service/user_service';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearProfile, readProfile } from '../../modules/profileRead';
import Footer from '../../components/Footer/footer';
function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const profileRead = useSelector((state) => state.profileRead);
  const location = useLocation();
  const profileUserId = location.pathname.split("/")[2];

  useEffect(()=> {
    dispatch(readProfile(profileUserId));
    return () => {
      dispatch(clearProfile())
    }
  }, [profileUserId]);


  return (
    <>
    <div className={style.Profile}>
      <Navbar/>
      <div className={style.profileContainer}>
        {profileRead.userId.length > 0 && <ProfileDetail profileInfo={profileRead} userId={user.userId}/>}
        <ProfileProject/>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Profile;
