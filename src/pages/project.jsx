import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import ProjectDetail from '../components/ProjectDetail/projectDetail';
import { clearRead, readProject } from '../modules/projectRead';
import Footer from '../components/Footer/footer';

function Project() {
  const dispatch = useDispatch();
  const location = useLocation();
  const projectId = location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(readProject(projectId));
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearRead());
    };
  }, [projectId]);

  return (
    <>
      <ProjectContainer>
        <Navbar />
        <ProjectDetail projectId={projectId} />
        <Footer></Footer>
      </ProjectContainer>
    </>
  );
}

export default Project;

const ProjectContainer = styled.div`
  min-height: calc(100vw - 160px);
  position: relative;
  padding-bottom: 2rem;
`;
