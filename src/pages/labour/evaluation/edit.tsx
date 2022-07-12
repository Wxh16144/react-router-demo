import React from 'react'
import { useParams } from 'react-router'
import useProject from '../../../hooks/useProject'

const EvaluationDetail = (props: any) => {
  const { isProject, projectId } = useProject()
  const { id } = useParams<any>()

  return (
    <h1>
      {isProject ? `项目(${projectId})` : '企业'}劳务评价详情-编辑页({id})
      <br />
    </h1>
  )
}

export default EvaluationDetail