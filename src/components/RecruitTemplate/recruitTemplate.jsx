import { Editor } from '@toast-ui/react-editor';
import React, { useEffect, useRef } from 'react';
import TextareaAutosize from 'react-autosize-textarea/lib';
import styled from 'styled-components';
import RecruitStacksSelection from '../RecruitStacksSelection/recruitStacksSelection';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeContents } from '../../modules/write';

function RecruitTemplate() {
  const editorRef = useRef();
  const titleRef = useRef();
  const dispatch = useDispatch();
  const {
    title,
    stackList,
    subjectDescription,
    projectTime,
    condition,
    progress,
    capacity,
    description,
  } = useSelector(({ write }) => ({
    title: write.title,
    stackList: write.stackList,
    subjectDescription: write.subjectDescription,
    projectTime: write.projectTime,
    condition: write.condition,
    progress: write.progress,
    capacity: write.capacity,
    description: write.description,
  }));

  const handleOnChangeContents = (e) => {
    let { value, name } = e.target;
    dispatch(changeContents({ key: name, value: e.target.value }));
  };

  const handleOnchangeEditor = (e) => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    dispatch(changeContents({ key: 'description', value: getContent_md }));
  };

  useEffect(() => {
    titleRef.current.focus();
    // return () => {
    //   dispatch(clearContents());
    // };
  }, []);

  return (
    <TemplateContainer>
      <TitleTextarea
        placeholder='제목을 입력하세요.'
        maxLength='64'
        name='title'
        value={title}
        ref={titleRef}
        onChange={handleOnChangeContents}
      />
      <Line></Line>
      <RecruitStacksSelection stackList={stackList}></RecruitStacksSelection>
      <Capacity>
        <ContentTextDiv>모집인원</ContentTextDiv>
        <CapacityInput
          type='number'
          max='16'
          name='capacity'
          value={capacity}
          onChange={handleOnChangeContents}
        />
      </Capacity>
      <Contents>
        <ContentTextDiv>프로젝트 기간</ContentTextDiv>
        <ContentsInputs
          placeholder='예시) 3개월, 2022.02~2022.04, ...'
          name='projectTime'
          value={projectTime}
          onChange={handleOnChangeContents}
        />
      </Contents>
      <Contents>
        <ContentTextDiv>프로젝트 주제 설명</ContentTextDiv>
        <ContentsInputs
          placeholder='프로젝트의 주제에 대한 간단한 설명을 적어주세요.'
          name='subjectDescription'
          value={subjectDescription}
          onChange={handleOnChangeContents}
        />
      </Contents>
      <Contents>
        <ContentTextDiv>모집 조건</ContentTextDiv>
        <ContentsInputs
          placeholder='구하고자 하는 팀원에 대해 간단한 설명을 적어주세요.&#13;&#10;예시) mongoDB 사용 가능하신 분, 두달 간 몰입해서 완료할 수 있는 분'
          name='condition'
          value={condition}
          onChange={handleOnChangeContents}
        />
      </Contents>
      <Contents>
        <ContentTextDiv>프로젝트 진행 방식</ContentTextDiv>
        <ContentsInputs
          placeholder='예시) 주 1회 화상회의, 강남역에서 오프라인으로 진행, 협의 후 결정'
          name='progress'
          value={progress}
          onChange={handleOnChangeContents}
        />
      </Contents>
      <Contents>
        <ContentTextDiv>프로젝트 상세(선택)</ContentTextDiv>
        <Editor
          height='500px'
          initialValue={description}
          initialEditType='wysiwyg'
          autofocus={false}
          placeholder='지원자에게 전달하고자 하는 정보를 자유롭게 적어주세요 :)'
          ref={editorRef}
          onChange={handleOnchangeEditor}
        />
      </Contents>
    </TemplateContainer>
  );
}

export default RecruitTemplate;

const TemplateContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  margin: auto;
  /* padding: 106px 102px 0 102px; */
`;

const TitleTextarea = styled(TextareaAutosize)`
  width: 100%;
  border: 0px;
  font-size: 2.25rem;
  font-weight: bold;
  outline: none;
  white-space: pre-wrap;
  word-break: break-all;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #909090;
  }
  :-ms-input-placeholder {
    color: #909090;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Line = styled.div`
  height: 0.5rem;
  background-color: #909090;
  width: 11.25rem;
  margin-top: 0.5rem;
  margin-bottom: 2.25rem;
`;

const Contents = styled.div`
  margin-top: 2rem;
`;

const ContentTextDiv = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #909090;
  margin-bottom: 4px;
`;

const Capacity = styled(Contents)`
  display: flex;
  align-items: center;
`;

const CapacityInput = styled.input`
  height: 2rem;
  width: 4.8rem;
  margin-left: 24px;
  font-size: 18px;
`;

const ContentsInputs = styled(TextareaAutosize)`
  font-size: 16px;
`;
