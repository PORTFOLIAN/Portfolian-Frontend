import React, {useState, useEffect, useRef} from 'react'
import style from './Write.module.scss'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
// import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import MakeStackButton from '../../components/MakeStackButton';
import { useHistory } from 'react-router';

let Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #909090;
  margin-bottom: 4px;
`;

let Content = styled.div`
  margin-top: 2rem;
`;

function Write(props) {
  // editorRef = React.createRef();
  // let [contents, setContents] = useState()
  const dispatch = useDispatch();
  let history = useHistory();
  let stack = useSelector((state)=>state.reducer);
  let project = useSelector((state)=>state.reducer2);
  let editorRef = useRef();
  let [btnSelect, setbtnSelect] = useState([]);
  let [stackArr, setStackArr] = useState([]);
  let [inputs, setInputs] = useState({
    title: '',
    stackList: [],
    subjectDiscription: '',
    projectTime: '',
    recruitCondition: '',
    progress: '',
    capacity: '',
    detail: ''
  });

  let {title, stackList, subjectDiscription, projectTime, recruitCondition, progress, capacity, detail} = inputs;

  const handleOnChange = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  
  const handleOnchangeEditor = (e) => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    setInputs({
      ...inputs,
      detail: getContent_md,
    });
  }

  const clickSubmission = ()=>{
    setInputs({
      ...inputs,
      stackList: stackArr
    });
    dispatch({type: 'Register', data: {inputs: inputs}});

  }

  useEffect(() => {
    stack.map((tag)=>{
      let tempObj = {name: tag.name, select: false}
      setbtnSelect(btnSelect => [...btnSelect, tempObj]);
    })
    return ()=> {
      setbtnSelect([]);
    }
  }, [])

  return (
    <div className={style.container}>
      <TextareaAutosize placeholder="제목을 입력하세요." maxLength="64" className={style.title} name="title" value={title} onChange={ handleOnChange } />
      <div className={style.line}></div>
      <div className={style.stackTag}>
        <Text className={style.stackText}>사용 기술 선택 (최대 7개)</Text>
        <MakeStackButton stackArr={stackArr} setStackArr={setStackArr} btnSelect={btnSelect} setbtnSelect={setbtnSelect}/>
      </div>
      <Content className={style.capacity}>
        <Text>모집인원</Text>
        <input type="number" max="16" name="capacity" value={capacity} onChange={ handleOnChange }/>
      </Content>
      <Content className={style.period}>
        <Text>프로젝트 기간</Text>
        <TextareaAutosize placeholder="예시) 3개월, 2021.09~0201.11, ..." name="projectTime" value={projectTime} onChange={ handleOnChange }/>
      </Content>
      <Content>
        <Text>프로젝트 주제 설명</Text>
        <TextareaAutosize placeholder="프로젝트의 주제에 대한 간단한 설명을 적어주세요." name="subjectDiscription" value={subjectDiscription} onChange={ handleOnChange }/>
      </Content>
      <Content>
        <Text>모집 조건</Text>
        <TextareaAutosize placeholder="구하고자 하는 팀원에 대해 간단한 설명을 적어주세요.&#13;&#10;예시) mongoDB 사용 가능하신 분, 두달 간 몰입해서 완료할 수 있는 분" name="recruitCondition" value={recruitCondition} onChange={ handleOnChange }/>
      </Content>
      <Content>
        <Text>프로젝트 진행 방식</Text>
        <TextareaAutosize placeholder="예시) 주 1회 화상회의, 강남역에서 오프라인으로 진행, 협의 후 결정" name="progress" value={progress} onChange={ handleOnChange }/>
      </Content>
      <Content>
        <Text>프로젝트 상세(선택)</Text>
        <Editor 
        height= "500px"
        initialValue= ""
        initialEditType= "wysiwyg"
        placeholder="지원자에게 전달하고자 하는 정보를 자유롭게 적어주세요 :)" ref={editorRef} onChange={handleOnchangeEditor}/>
      </Content>
      <div className={style.btnContainer}>
        <button className={style.temp}>임시저장</button>
        <button className={style.save} onClick={ 
          clickSubmission
        }>등록하기</button>
        {/* {console.log(project)} */}
      </div>
    </div>
  )
}

export default Write
