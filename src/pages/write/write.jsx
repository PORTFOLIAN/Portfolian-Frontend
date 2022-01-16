import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal/modal';
import RecruitTemplate from '../../components/RecruitTemplate/recruitTemplate'
import SetOwnerStack from '../../components/SetOwnerStack/setOwnerStack';
import style from './Write.module.scss'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearContents, writePost } from '../../modules/write';
import Navbar from '../../components/Navbar/navbar';

function Write() {
  const user = useSelector((state)=> state.user);
  const write = useSelector((state)=> state.write);
  const history = useHistory();
  const dispatch = useDispatch();

  const [ownerStackModal, setOwnerStackModal] = useState(false);

  const handleOwnerStackModal = () => {
    setOwnerStackModal(!ownerStackModal);
  }

  const checkValidity = () => {
    if(write.title.length === 0) {
      toast.error("제목을 입력해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.stackList.length === 0) {
      toast.error("사용하실 기술을 선택해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.subjectDescription.length === 0) {
      toast.error("프로젝트 주제에 대해 설명해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.projectTime.length === 0) {
      toast.error("프로젝트 기간을 설정해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.condition.length === 0) {
      toast.error("모집 조건을 설명해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.progress.length === 0) {
      toast.error("프로젝트 진행방식에 대해 설명해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.capacity <= 0) {
      toast.error("모집 인원을 다시 설정해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.capacity > 16) {
      toast.error("모집 인원은 최대 16명입니다.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    if (write.ownerStack.length === 0) {
      toast.error("작성자님이 사용할 기술을 선택해주세요.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    return true;
  }

  const handleClickSubmit = () => {
    if(!checkValidity()) return ;
    else {
      const article = {
        title: write.title,
        stackList: write.stackList,
        subjectDescription: write.subjectDescription,
        projectTime: write.projectTime,
        condition: write.condition,
        progress: write.progress,
        description: write.description,
        capacity: write.capacity,
      }
      const ownerStack = write.ownerStack
      if (write.postId) {
        // 수정하는 상황
      }
      else {
        dispatch(writePost({ article,  ownerStack })).then((response)=> {
          toast.success("글 작성이 완료되었어요!", {
            position: "top-right",
            autoClose: 4000,
          });
        });
        history.push('/')
      }
    }
    
  }

  useEffect(()=> {
    //유저정보 없으면 로그인하라고 알려주고 홈으로 가기
    if (!user.userId) {
      toast.error("로그인이 필요한 페이지입니다.", {
        position: "top-right",
        autoClose: 3000,
      });
      history.push("/");
    }
  }, [user.userId])

  useEffect(() => {
    return () => {
      dispatch(clearContents());
    };
  }, []);

  //작성자님이 사용할 기술을 골라주세요!(1개)
  return (
    <>
      <Navbar />
      <div className={style.writeContainer} modal={ownerStackModal}>
        <RecruitTemplate></RecruitTemplate>
        <div className={style.btnContainer}>
          <button>취&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소</button>
          <div>
            <button className={style.temp}>임시저장</button>
            <button className={style.save} onClick={handleOwnerStackModal}>다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;음</button>
          </div>
          {/* {console.log(project)} */}
        </div>
      </div>
      {ownerStackModal && <Modal closeModal={handleOwnerStackModal}><SetOwnerStack handleOwnerStackModal={handleOwnerStackModal} handleClickSubmit={handleClickSubmit}></SetOwnerStack></Modal>}
    </>
  )
}

export default Write
