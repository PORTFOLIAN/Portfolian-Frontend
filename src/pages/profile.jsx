import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/navbar';
import ProfileDetail from '../components/ProfileDetail/profileDetail';
import ProfileProject from '../components/ProfileProject/profileProject';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearProfile, readProfile } from '../modules/profileRead';
import Footer from '../components/Footer/footer';
import EditProfile from '../components/EditProfile/editProfile';
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
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearProfile());
    };
  }, [profileUserId]);

  return (
    <>
      <ProfileContainer>
        <Navbar />
        <ProfileContents>
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
        </ProfileContents>

        <ProfileProject />
        <Footer></Footer>
      </ProfileContainer>
    </>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  min-height: calc(100vh - 160px);
  position: relative;
  padding-bottom: 2rem;
`;

const ProfileContents = styled.div`
  height: 100%;
  max-width: 62rem;
  margin: 0 auto;
`;
