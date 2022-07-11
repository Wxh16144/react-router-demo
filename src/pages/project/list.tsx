import { NavLink } from 'react-router-dom'
import HomeLayout from '../../layout/HomeLayout'
import { PROJECT_BASE_PATH } from '../../router/routes.config'

const ProjectList = () => {
  return (
    <HomeLayout>
      <h1>项目列表页</h1>
      <ul>
        {
          Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <NavLink to={`${PROJECT_BASE_PATH}/${index}`}>项目{index}</NavLink>
            </li>
          ))
        }
      </ul>
    </HomeLayout>
  )
}

export default ProjectList