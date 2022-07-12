import React from 'react'
import { Link } from 'react-router-dom'
import HomeLayout from '../../layout/HomeLayout'
import { LABOR_EVALUATE_BASE_PATH } from '../../router/labour.routes'

const CompanyHome = () => {

  return (
    <HomeLayout>
      <h1>企业工作台</h1>
      <br />
      <Link to={`${LABOR_EVALUATE_BASE_PATH}`}>前往企业劳务评价列表</Link>
    </HomeLayout>
  )
}

export default CompanyHome