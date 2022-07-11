import React from 'react'
import useProject from '../../../hooks/useProject'

const Evaluation = () => {
  const { isProject, projectId } = useProject()
  console.log({ projectId });

  return (
    <h1>
      {isProject ? `项目(${projectId})` : '企业'}劳务评价列表
    </h1>
  )
}

export default Evaluation