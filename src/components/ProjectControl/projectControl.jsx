import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { setContents } from '../../modules/write';

function ProjectControl({ leaderId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const projectRead = useSelector((state) => state.projectRead);
  const user = useSelector((state) => state.user);
  const handleEdit = () => {
    dispatch(setContents(projectRead));
    history.push('/write');
  };

  return (
    <OwnerControlSection>
      {leaderId === user.userId ? (
        <>
          <ControlBtn onClick={handleEdit}>수정</ControlBtn>
          <ControlBtn>삭제</ControlBtn>
        </>
      ) : null}
    </OwnerControlSection>
  );
}

export default ProjectControl;

const OwnerControlSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    /* height: 3rem; */
    margin-left: 1rem;
  }
`;

const ControlBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  margin-right: 0.5rem;
  color: #909090;
`;
