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
import EditProfile from '../../components/EditProfile/editProfile';
/*
내 프로필이랑 상대방 프로필 컴포넌트 분리하기
내 id랑 프로필 id가 같으면 수정템플릿이 포함된 컴포넌트
다른사람 프로필 보는거면 원래의 projectDetail 컴포넌트

*/
function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const profileRead = useSelector((state) => state.profileRead);
  const [editMode, setEditMode] = useState(false);
  const location = useLocation();
  const profileUserId = location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(readProfile(profileUserId));
    return () => {
      dispatch(clearProfile());
    };
  }, [profileUserId]);

  return (
    <>
      <div className={style.Profile}>
        <Navbar />
        <div className={style.profileContainer}>
          {!editMode ? (
            <>
              {profileRead.userId.length > 0 ? (
                <ProfileDetail
                  userId={user.userId}
                  profileRead={profileRead}
                  setEditMode={setEditMode}
                />
              ) : null}
            </>
          ) : (
            <EditProfile
              userId={user.userId}
              profileRead={profileRead}
              setEditMode={setEditMode}
            />
          )}
        </div>

        <ProfileProject />
        <Footer></Footer>
      </div>
    </>
  );
}

export default Profile;
