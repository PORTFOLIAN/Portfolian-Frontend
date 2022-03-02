import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Line } from '../asset/line.svg';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function ProjectTemplate({ contents }) {
  //   {
  //     "subjectDescription": "리액트를 이용해서 카카오 로그인 구현하고 백앤드에서 jwt만들어주세요",
  //     "projectTime": "1주일",
  //     "recruitmentCondition": "백앤드 개발자도 지원해주세요",
  //     "progress": "일주일동안 못끝내면 그냥 버릴거임",
  //     "description": "**핼로**"
  // }

  return (
    <TemplateContainer>
      <TemplateContent>
        <Line></Line>
        <TemplateTitle>프로젝트 주제</TemplateTitle>
      </TemplateContent>
      <Description>{contents.subjectDescription}</Description>
      <TemplateContent>
        <Line></Line>
        <TemplateTitle>프로젝트 기간</TemplateTitle>
      </TemplateContent>
      <Description>{contents.projectTime}</Description>
      <TemplateContent>
        <Line></Line>
        <TemplateTitle>모집 조건</TemplateTitle>
      </TemplateContent>
      <Description>{contents.recruitmentCondition}</Description>
      <TemplateContent>
        <Line></Line>
        <TemplateTitle>프로젝트 진행 방식</TemplateTitle>
      </TemplateContent>
      <Description>{contents.progress}</Description>
      {contents.description && contents.description.length > 0 ? (
        <>
          <TemplateContent>
            <Line></Line>
            <TemplateTitle>프로젝트 상세</TemplateTitle>
          </TemplateContent>
          <DescriptionContents
            components={{
              img: ({ node, ...props }) => (
                <img style={{ maxWidth: '80%' }} {...props} alt="" />
              ),
            }}
          >
            {contents.description}
          </DescriptionContents>
        </>
      ) : null}
    </TemplateContainer>
  );
}

export default ProjectTemplate;

const TemplateContainer = styled.div`
  margin-top: 5rem;
  margin-left: 1rem;
  max-width: 100vw;
`;

const TemplateContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;

const TemplateTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0.3rem;
  color: #4a4e4e;
`;

const Description = styled.div`
  margin-top: 1rem;
  font-size: 18px;
  margin-left: 5.8px;
`;
const DescriptionContents = styled(ReactMarkdown)`
  word-break: break-all;
`;
