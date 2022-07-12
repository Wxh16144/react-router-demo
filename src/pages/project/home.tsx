import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useProject from '../../hooks/useProject'
import HomeLayout from '../../layout/HomeLayout'
import { LABOR_EVALUATE_BASE_PATH } from '../../router/labour.routes'

const ProjectHome = () => {
  const { projectId } = useProject()
  const { pathname } = useLocation()


  return (
    <HomeLayout>
      <h1>项目工作台{projectId}</h1>
      <br />
      <Link to={`${pathname}${LABOR_EVALUATE_BASE_PATH}`}>前往项目{projectId}劳务评价列表</Link>

    </HomeLayout>
  )
}

export default ProjectHome