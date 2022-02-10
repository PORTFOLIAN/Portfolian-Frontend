import React from 'react'
import { useEffect } from 'react';
import style from './Project.module.scss';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar';
import ProjectDetail from '../../components/ProjectDetail/projectDetail';
import ProjectManagerMobile from '../../components/ProjectManagerMobile/projectManagerMobile';
import { clearRead, readProject } from '../../modules/projectRead';

function Project() {
  const dispatch = useDispatch();
  const location = useLocation();
  const projectId = location.pathname.split("/")[2];

  useEffect(()=> {
    dispatch(readProject(projectId));
    return ()=> {
      dispatch(clearRead());
    }
  }, [projectId]);

  return (
    <div className={style.projectContainer}>
      <Navbar />
      <ProjectDetail projectId={projectId}/>
    </div>
  )
}

export default Project


