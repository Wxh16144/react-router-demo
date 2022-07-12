import { Button } from 'antd'
import { useLocation, useParams } from 'react-router'
import useProject from '../../../hooks/useProject'
import { history } from '../../../main'

const EvaluationDetail = (props: any) => {
  const { isProject, projectId } = useProject()
  const { id } = useParams<any>()
  const { pathname } = useLocation()

  return (
    <h1>
      {isProject ? `项目(${projectId})` : '企业'}劳务评价详情({id})
      <br />
      <Button onClick={() => {
        history.push(`${pathname}/edit`)
      }}>编辑{projectId}</Button>
    </h1>
  )
}

export default EvaluationDetail