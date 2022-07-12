import React, { FC } from 'react'
import styles from './HomeLayout.module.less'
import { NavLink ,NavLinkProps} from 'react-router-dom'
import { COMPANY_BASE_PATH, PROJECT_BASE_PATH } from "../router/constants"
import useProject from '../hooks/useProject'

const HomeLayout: FC<any> = ({ children }) => {
  const { isProject } = useProject()

  const handleIsActive:NavLinkProps['isActive'] = (match) => {
    return match?.isExact || isProject
  }

  return (
    <div>
      <NavLink
        activeClassName={styles.active}
        exact
        to={COMPANY_BASE_PATH}>
        企业工作台
      </NavLink>

      <NavLink
        activeClassName={styles.active}
        to={PROJECT_BASE_PATH}
        isActive={handleIsActive} >
        项目工作台
      </NavLink>
      {children}
    </div>
  )
}

export default HomeLayout