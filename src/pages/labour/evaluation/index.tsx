import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useProject from '../../../hooks/useProject'

const Evaluation = (props: any) => {
  const { isProject, projectId } = useProject()
  const { pathname } = useLocation()

  return (
    <h1>
      {isProject ? `项目(${projectId})` : '企业'}劳务评价列表
      <br />
      <ul>
        {
          Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <NavLink to={`${pathname}/${index}`}>劳务评价{index}</NavLink>
            </li>
          ))
        }
      </ul>
    </h1>
  )
}

export default Evaluation