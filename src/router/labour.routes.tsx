import LabourEvaluation from "../pages/labour/evaluation";
import { COMPANY_BASE_PATH, PROJECT_HOME_BASE_PATH } from "./constants";
import { RouteItem } from "./interface";

export const LABOR_BASE_PATH = '/labour';
export const LABOR_EVALUATE_BASE_PATH = `${LABOR_BASE_PATH}/evaluation`;


const labourRoutesEvaluation: RouteItem[] = [
  {
    path: LABOR_EVALUATE_BASE_PATH,
    name: 'labourEvaluation',
    title: '劳务评价',
    component: LabourEvaluation,
    exact: true,
  }
]

const projectLabourRoutesEvaluation = labourRoutesEvaluation.map((routeItem) => ({
  ...routeItem,
  hideInMenu: true,
  path: `${PROJECT_HOME_BASE_PATH}${routeItem.path}`,
}))

const companyLabourRoutesEvaluation = labourRoutesEvaluation.map((routeItem) => ({
  ...routeItem,
  path: `${COMPANY_BASE_PATH}${routeItem.path}`,
}))

const labourRoutes: RouteItem[] = [
  {
    path: LABOR_BASE_PATH,
    name: 'labour',
    title: '劳务管理',
    routes: [
      ...companyLabourRoutesEvaluation,
      ...projectLabourRoutesEvaluation,
    ]
  }
]


export default labourRoutes



