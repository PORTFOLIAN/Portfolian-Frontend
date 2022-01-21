import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar';
import ProjectDetail from '../../components/projectDetail/projectDetail';

function Project() {
  const dispatch = useDispatch();
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];

  return (
    <>
      <Navbar />
      <ProjectDetail projectId={projectId}/>
    </>
  )
}

export default Project
