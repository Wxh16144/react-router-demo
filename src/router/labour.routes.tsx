import LabourEvaluation from "../pages/labour/evaluation";
import LabourEvaluationDetail from "../pages/labour/evaluation/detail";
import { COMPANY_BASE_PATH, PROJECT_HOME_BASE_PATH } from "./constants";
import { RouteItem } from "./interface";

import {upperFirst} from 'lodash-es'

export const LABOR_BASE_PATH = '/labour';
export const LABOR_EVALUATE_BASE_PATH = `${LABOR_BASE_PATH}/evaluation`;

const labourRoutesEvaluation: RouteItem[] = [
  {
    path: LABOR_EVALUATE_BASE_PATH,
    name: 'labourEvaluation',
    title: '劳务评价',
    component: LabourEvaluation,
    exact: true,
  },
  {
    path: `${LABOR_EVALUATE_BASE_PATH}/:id`,
    name: 'labourEvaluationDetail',
    title: '评价详情',
    component: LabourEvaluationDetail,
    exact: true,
    hideInMenu: true,
  }
]

const projectLabourRoutesEvaluation = labourRoutesEvaluation.map((routeItem) => ({
  ...routeItem,
  hideInMenu: true,
  name: `project${upperFirst(routeItem.name)}`,
  path: `${PROJECT_HOME_BASE_PATH}${routeItem.path}`,
}))

const companyLabourRoutesEvaluation = labourRoutesEvaluation.map((routeItem) => ({
  ...routeItem,
  path: `${COMPANY_BASE_PATH}${routeItem.path}`,
}))

const labourRoutes: RouteItem[] = [
  {
    path: `${COMPANY_BASE_PATH}${LABOR_BASE_PATH}`,
    name: 'labour',
    icon: '《图标》',
    title: '劳务管理',
    routes: [
      ...companyLabourRoutesEvaluation,
    ]
  },
  ...projectLabourRoutesEvaluation,
]


export default labourRoutes



